const express = require('express')
const { CLIENT_LONG_PASSWORD } = require('mysql/lib/protocol/constants/client')
const con = require('../modul/db.js')
const jwt = require("jsonwebtoken");

const router = express.Router()

let db = con.handleDisconnection()



// 处理数据的函数
// data 数据
// root 顶级数据
let getChildren = function (data, root) {
  var children = [];
  for (var i = 0; i < data.length; i++) {
    if (root == data[i].super) {
      data[i].children = getChildren(data, data[i].id);
      children.push(data[i]);
    }
  }
  return children;
}
//左侧管理列表(管理员)
router.get('/manage', (req, res) => {
  let sql = `SELECT * FROM management_taskes`
  db.query({
    sql: sql
  }, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(getChildren(results, 0))
    }
  })
})

//用户登录
router.get('/users', (req, res) => {
  let params = req.query;
  let username = params.username;
  let password = params.password;
  let sel_sql = `SELECT * FROM users WHERE users.username = '${username}' `
  let sql = `SELECT * FROM users WHERE users.username = '${username}' and users.password='${password}' `
  db.query(sql, [params.username, params.password], function (err, result) {
    let data = JSON.parse(JSON.stringify(result)) //JSON.stringify方法用于将 JavaScript 值转换为 JSON 字符串。
    console.log('data ' + data.toString() + 'result ' + result.toString());
    //生成token
    let content = {
      password: params.password
    }
    let secretOrPrivateKey = '_jwt'; //这是加密的Key(密钥)
    let token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1 //1小时过期
    });
    if (err) {
      console.log(err)
    }
    if (result.length === 0) {
      return res.send(JSON.stringify({ //序列化json数据
        msg: 'no admin',
        res: result
      }))
    }
    else {
      db.query(sel_sql, params.username, (error, result) => {
        if (result[0].identity == "admin") {
          return res.send(JSON.stringify({
            msg: 'admin login success',
            success: true,
            username: params.username,
            password: params.password,
            token: token,
            res: result,
          }))
        }
        if (result[0].identity == "user") {
          return res.send(JSON.stringify({
            msg: 'user login success',
            success: true,
            username: params.username,
            password: params.password,
            token: token,
            res: result,
          }))
        }
        if (result[0].identity == "author") {
          return res.send(JSON.stringify({
            msg: 'author login success',
            success: true,
            username: params.username,
            password: params.password,
            token: token,
            res: result,
          }))
        }
      })
    }
  })
});

// 注册接口
router.post('/adduser', (req, res) => {
  let params = req.body;
  let username = params.username;
  let password = params.password;
  let email = params.email;
  const sel_sql = `SELECT * FROM users WHERE users.username = '${username}' `
  const add_sql = `INSERT INTO users (username,email,password,identity) values ('${username}','${email}','${password}','user')`
  console.log(sel_sql);

  db.query(sel_sql, params.username, (error, results) => {
    if (error) {
      console.log(err);
    }
    if (results.length != 0 && params.username == results[0].username) {
      res.send(JSON.stringify({
        msg: -1,
        res: results
      }));  // -1 表示用户名已经存在
    }
    else {
      db.query(add_sql, [params.username, params.password], (err, rst) => {
        studentmanage
        if (err) {
          console.log(err);
        } else {
          console.log(rst);
          res.send(JSON.stringify({
            msg: 0,
            res: results
          })); // 0 表示用户创建成功
        }
      });
    }
  });
});

//#region 数据库上传图片信息，包括bos地址，可链接的网页等
//增
router.post('/putBosPicture', (req, res) => {
  let BosRegion = 'https://zfblog.su.bcebos.com';
  let BosBucket = 'zfblog';
  let BosPath = req.body.BosPath;
  let BosName = req.body.BosName;
  let BosExtention = '';
  let Size = 0;
  let CreateBy = '';
  let PictureType = req.body.PictureType;
  let Href = req.body.Href;
  let sql = `INSERT INTO bos_picture (
    BosRegion,
    BosBucket,
    BosPath,
    BosName,
    BosExtention,
    Size,
    CreateBy,
    PictureType,
    Href) 
    values 
    ('${BosRegion}',
    '${BosBucket}',
    '${BosPath}',
    '${BosName}',
    '${BosExtention}',
    '${Size}',
    '${CreateBy}',
    '${PictureType}',
    '${Href}')`
  db.query(sql, [], (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify({
        res: results
      }));
    }
  })
})
//删
router.post('/DeleteBosPicture', (req, res) => {
  let id = req.body.key;
  let sql = `UPDATE bos_picture SET DeleteFlag = ? WHERE Id = ?`;
  db.query(sql, [1, id], (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify({
        res: results
      }));
    }
  })
})
//查
router.get('/getBosPicture', (req, res) => {
  let type = req.query.type
  let CreateBy = req.query.username
  let sql = `SELECT * FROM bos_picture WHERE bos_picture.PictureType = '${type}' and bos_picture.DeleteFlag = '${0}' and bos_picture.CreateBy = '${CreateBy}'`
  db.query({
    sql: sql
  }, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify({
        res: results
      }));
    }
  })
})
//#endregion




module.exports = router
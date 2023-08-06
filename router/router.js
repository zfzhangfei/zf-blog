const express = require('express')
const { CLIENT_LONG_PASSWORD } = require('mysql/lib/protocol/constants/client')
const con = require('../modul/db.js')
const jwt = require("jsonwebtoken");

const router = express.Router()

let db = con.handleDisconnection()
const now = new Date();
let CURRENT_TIMESTAMP = now.toLocaleString()
let CURRENT_USER = {
  id: null,
  username: null,
}

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














//#region 用户登录
router.get('/users', (req, res) => {
  let params = req.query;
  let username = params.username;
  let password = params.password;
  let sel_sql = `SELECT * FROM users WHERE users.username = '${username}' `
  let sql = `SELECT * FROM users WHERE users.username = '${username}' and users.password='${password}' `
  db.query(sql, [params.username, params.password], function (err, result) {
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
        CURRENT_USER.id = result[0].id
        CURRENT_USER.username = result[0].username
        if (err) {
          console.log(err)
        } else {
          return res.send(JSON.stringify({
            msg: 'login success',
            success: true,
            token: token,
            username: req.query.username,
            avatar: result[0].avatar,
            maxim: result[0].maxim,
          }))
        }
      })
    }
  })
});

//#region 获取用户简介
router.get('/getIntroduction', (req, res) => {
  let sql = `SELECT * FROM users WHERE users.username = ? and users.password=? `
  db.query(sql, [req.query.username, req.query.password], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      return res.send(JSON.stringify({
        msg: 'login success',
        success: true,
        username: req.query.username,
        avatar: result[0].avatar,
        maxim: result[0].maxim,
      }))
    }
  })
});
//#endregion
//#endregion





//#region 头像
//#region 改
router.post('/EditAvatar', (req, res) => {
  let sql = `UPDATE users SET avatar = ? , UpdateTime =? , UpdateBy =? WHERE id = ?`;
  let params = [
    req.body.avatar,
    CURRENT_TIMESTAMP,
    CURRENT_USER.username,
    CURRENT_USER.id,
  ]
  db.query(sql, params, (err, results) => {
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
//#endregion





//#region 格言
//#region 改
router.post('/EditMaxim', (req, res) => {
  let sql = `UPDATE users SET maxim = ? , UpdateTime =? , UpdateBy =? WHERE id = ?`;
  let params = [
    req.body.maxim,
    CURRENT_TIMESTAMP,
    CURRENT_USER.username,
    CURRENT_USER.id,
  ]
  db.query(sql, params, (err, results) => {
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
//#endregion





//#region 图片的增删改查

//#region 增
router.post('/putBosPicture', (req, res) => {
  let sql = ` INSERT INTO bos_picture (
    BosRegion,  
    BosBucket,
    BosPath,
    BosName,
    BosExtention,
    Size, 
    CreateBy,
    PictureType,
    Href,
    CreateTime
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`
  let params = [
    'https://zfblog.su.bcebos.com',
    'zfblog',
    req.body.BosPath,
    req.body.BosName,
    '',
    0,
    CURRENT_USER.username,
    req.body.PictureType,
    req.body.Href,
    CURRENT_TIMESTAMP,
  ]
  db.query(sql, params, (err, results) => {
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

//#region 删
router.post('/DeleteBosPicture', (req, res) => {
  let sql = `UPDATE bos_picture SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [
    1,
    CURRENT_TIMESTAMP,
    CURRENT_USER.username,
    req.body.key,
  ]
  db.query(sql, params, (err, results) => {
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

//#region 查
router.get('/getBosPicture', (req, res) => {
  let sql = `SELECT * FROM bos_picture WHERE bos_picture.PictureType = ? and bos_picture.DeleteFlag = ? and bos_picture.CreateBy = ?`
  let params = [
    req.query.type,
    0,
    CURRENT_USER.username,
  ]
  db.query(sql, params, (err, results) => {
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
//#endregion


module.exports = router
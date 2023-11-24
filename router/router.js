const express = require("express");
const { CLIENT_LONG_PASSWORD } = require("mysql/lib/protocol/constants/client");
const con = require("../modul/db.js");
const jwt = require("jsonwebtoken");

const router = express.Router();

let db = con.handleDisconnection();

const now = new Date();
let CURRENT_TIMESTAMP = now.toLocaleString();
let CURRENT_USER = {
  id: null,
  username: null,
  identity: null,
};

const isAuthenticated = (req, res, next) => {
  // 这里应该是您的身份验证逻辑
  // if (CURRENT_USER.id) {
    next();
  // } else {
  //   res.status(401).send({ message: "未授权的访问" });
  // }
};

const isAuthorizedToDeleteCategory = (req, res, next) => {
  // 这里应该是您的授权逻辑，例如：
  if (CURRENT_USER.identity === "admin") {
    next();
  } else {
    res.status(403).send({ message: "没有权限执行这个操作" });
  }
};

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
};
//左侧管理列表(管理员)
router.get("/manage", (req, res) => {
  mysql;
  let sql = `SELECT * FROM management_taskes`;
  db.query(
    {
      sql: sql,
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(getChildren(results, 0));
      }
    }
  );
});

// 注册接口
router.post("/adduser", (req, res) => {
  let params = req.body;
  let username = params.username;
  let password = params.password;
  let email = params.email;
  const sel_sql = `SELECT * FROM users WHERE users.username = '${username}' `;
  const add_sql = `INSERT INTO users (username,email,password,identity) values ('${username}','${email}','${password}','user')`;
  console.log(sel_sql);

  db.query(sel_sql, params.username, (error, results) => {
    if (error) {
      console.log(err);
    }
    if (results.length != 0 && params.username == results[0].username) {
      res.send(
        JSON.stringify({
          msg: -1,
          res: results,
        })
      ); // -1 表示用户名已经存在
    } else {
      db.query(add_sql, [params.username, params.password], (err, rst) => {
        studentmanage;
        if (err) {
          console.log(err);
        } else {
          console.log(rst);
          res.send(
            JSON.stringify({
              msg: 0,
              res: results,
            })
          ); // 0 表示用户创建成功
        }
      });
    }
  });
});

//#region 用户登录
router.get("/users", (req, res) => {
  let params = req.query;
  let username = params.username;
  let password = params.password;
  let sel_sql = `SELECT * FROM users WHERE users.username = '${username}' `;
  let sql = `SELECT * FROM users WHERE users.username = '${username}' and users.password='${password}' `;
  db.query(sql, [params.username, params.password], function (err, result) {
    //生成token
    let content = {
      password: params.password,
    };
    let secretOrPrivateKey = "_jwt"; //这是加密的Key(密钥)
    let token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1, //1小时过期
    });
    if (err) {
      console.log(err);
    }
    if (result.length === 0) {
      return res.send(
        JSON.stringify({
          //序列化json数据
          msg: "no admin",
          res: result,
        })
      );
    } else {
      db.query(sel_sql, params.username, (error, result) => {
        CURRENT_USER.id = result[0].id;
        CURRENT_USER.username = result[0].username;
        CURRENT_USER.identity = result[0].identity;
        if (err) {
          console.log(err);
        } else {
          return res.send(
            JSON.stringify({
              msg: "login success",
              success: true,
              token: token,
              username: req.query.username,
              avatar: result[0].avatar,
              maxim: result[0].maxim,
            })
          );
        }
      });
    }
  });
});

router.get("/getUsers", (req, res) => {
  let sql = `SELECT * FROM users WHERE users.DeleteFlag = ?`;
  let params = [0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

//#region 文章---artical
router.post("/postArtical", isAuthenticated, (req, res) => {
  let sql = ` INSERT INTO article (
    name,  
    tags,
    category,
    summary,
    author,
    cover,
    isRelease,
    CreateBy,
    CreateTime,
    DeleteFlag
  ) VALUES (?,?,?,?,?,?,?,?,?,?)`;
  let params = [
    req.body.name,
    req.body.tags,
    req.body.category,
    req.body.summary,
    CURRENT_USER.username,
    req.body.cover,
    req.body.isRelease,
    CURRENT_USER.id,
    CURRENT_TIMESTAMP,
    0,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/deleteArticle", isAuthenticated, (req, res) => {
  let sql = `UPDATE article SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [1, CURRENT_TIMESTAMP, CURRENT_USER.id, req.body.Id];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/updateArticle", isAuthenticated, (req, res) => {
  let sql = "UPDATE article SET ";
  let params = [];
  if (req.body.name != null) {
    sql += "name = ?,";
    params.push(req.body.name);
  }
  if (req.body.tags != null) {
    sql += "tags = ?,";
    params.push(req.body.tags);
  }
  if (req.body.category != null) {
    sql += "category = ?,";
    params.push(req.body.category);
  }
  if (req.body.summary != null) {
    sql += "summary = ?,";
    params.push(req.body.summary);
  }
  if (req.body.content != null) {
    sql += "content = ?,";
    params.push(req.body.content);
  }
  if (req.body.isRelease != null) {
    sql += "isRelease = ?,";
    params.push(req.body.isRelease);
  }
  sql += "UpdateBy = ?,";
  params.push(CURRENT_USER.id);
  sql += "UpdateTime = ? ";
  params.push(CURRENT_TIMESTAMP);
  sql += "WHERE Id = ?";
  params.push(req.body.Id);

  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getArticle", (req, res) => {
  let sql = `SELECT * FROM article WHERE article.DeleteFlag = ?`;
  let params = [0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});
//#endregion

//#region 评论
router.post("/postComment", isAuthenticated, (req, res) => {
  let sql = `INSERT INTO comment (
        ParentCommentId,  
        ParentId,
        Content,
        IsLeaf,
        IsLike,
        Avatar,
        ArticleId,
        CreateBy,
        CreateTime
    ) VALUES (?,?,?,?,?,?,?,?,?)`;
  let params = [
    req.body.ParentCommentId,
    req.body.ParentId,
    req.body.Content,
    req.body.IsLeaf,
    req.body.IsLike,
    req.body.Avatar,
    req.body.ArticleId,
    CURRENT_USER.id,
    CURRENT_TIMESTAMP,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/deleteComment", isAuthenticated, (req, res) => {
  let sql = `UPDATE comment SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [1, CURRENT_TIMESTAMP, CURRENT_USER.id, req.body.Id];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/updateComment", isAuthenticated, (req, res) => {
  let sql = `UPDATE comment SET 
  Parents=?,  
  ParentsId=?,
  ParentsName=?,
  Content=?,
  IsLeaf=?,
  IsLike=?,
  Avatar=?,
  ArticleId=?,
  UpdateBy=?,
  UpdateTime=?WHERE Id = ?`;
  let params = [
    req.body.Parents,
    req.body.ParentsId,
    req.body.ParentsName,
    req.body.Content,
    req.body.IsLeaf,
    req.body.IsLike,
    req.body.Avatar,
    req.body.ArticleId,
    CURRENT_USER.id,
    CURRENT_TIMESTAMP,
    req.body.key,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getComments", (req, res) => {
  let sql = `SELECT * FROM comment WHERE comment.DeleteFlag = ?`;
  let params = [0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getCommentByArticleId", (req, res) => {
  let sql = `SELECT * FROM comment WHERE comment.DeleteFlag = ? and comment.ArticleId=?`;
  let params = [0, req.query.ArticleId];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

//#endregion

//#region 图片
router.post("/postBosPicture", isAuthenticated, (req, res) => {
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
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
  let params = [
    "https://zfblog.su.bcebos.com",
    "zfblog",
    req.body.BosPath,
    req.body.BosName,
    "",
    0,
    CURRENT_USER.id,
    req.body.PictureType,
    req.body.Href,
    CURRENT_TIMESTAMP,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/deleteBosPicture", isAuthenticated, (req, res) => {
  let sql = `UPDATE bos_picture SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [1, CURRENT_TIMESTAMP, CURRENT_USER.id, req.body.key];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getBosPicture", (req, res) => {
  let sql = `SELECT * FROM bos_picture WHERE bos_picture.PictureType = ? and bos_picture.DeleteFlag = ?`;
  let params = [req.query.type, 0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});
//#endregion

//#region 标签
router.post("/postTag", isAuthenticated, (req, res) => {
  let sql = ` INSERT INTO dictionary_mark (
    Value,
    Color,
    CreateBy,
    CreateTime
  ) VALUES (?, ?, ?, ?)`;
  let params = [
    req.body.Value,
    req.body.Color,
    CURRENT_USER.id,
    CURRENT_TIMESTAMP,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/deleteTag", isAuthenticated, (req, res) => {
  let sql = `UPDATE dictionary_mark SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [1, CURRENT_TIMESTAMP, CURRENT_USER.id, req.body.Id];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getTags", (req, res) => {
  let sql = `SELECT * FROM dictionary_mark WHERE dictionary_mark.DeleteFlag = ? `;
  let params = [0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});
//#endregion

//#region 分类
router.post("/postCategory", isAuthenticated, (req, res) => {
  let sql = ` INSERT INTO category (
    Title,
    Icon,
    CreateBy,
    CreateTime
  ) VALUES (?, ?, ?, ?)`;
  let params = [
    req.body.Title,
    req.body.Icon,
    CURRENT_USER.id,
    CURRENT_TIMESTAMP,
  ];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.post("/deleteCategory", isAuthenticated, (req, res) => {
  let sql = `UPDATE category SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
  let params = [1, CURRENT_TIMESTAMP, CURRENT_USER.id, req.body.Id];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});

router.get("/getCategories", (req, res) => {
  let sql = `SELECT * FROM category WHERE category.DeleteFlag = ? `;
  let params = [0];
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        JSON.stringify({
          res: results,
        })
      );
    }
  });
});
//#endregion

module.exports = router;

const express = require('express')
const { CLIENT_LONG_PASSWORD } = require('mysql/lib/protocol/constants/client')
const con = require('../modul/db.js')
const jwt = require("jsonwebtoken");
const router = express.Router()
let db = con.handleDisconnection()
const routerback = require('./router.js')



const now = new Date();
let CURRENT_TIMESTAMP = now.toLocaleString()
let CURRENT_USER = routerback.getCurrentUser();





//#region 新增
router.post('/putClassification', (req, res) => {
    let sql = ` INSERT INTO classification (
      Title,
      CreateBy,
      CreateTime
    ) VALUES (?, ?, ?)`
    let params = [
      req.body.Title,
      CURRENT_USER.id,
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
  
//   //#region 删
//   router.post('/deleteMark', (req, res) => {
//     let sql = `UPDATE dictionary_mark SET DeleteFlag = ? , DeleteTime =? , DeleteBy =? WHERE Id = ?`;
//     let params = [
//       1,
//       CURRENT_TIMESTAMP,
//       CURRENT_USER.id,
//       req.body.key,
//     ]
//     db.query(sql, params, (err, results) => {
//       if (err) {
//         console.log(err)
//       } else {
//         res.send(JSON.stringify({
//           res: results
//         }));
//       }
//     })
//   })
//   //#endregion
  
  //#region 查
  router.get('/getClassification', (req, res) => {
    let sql = `SELECT * FROM classification WHERE classification.DeleteFlag = ? and classification.CreateBy = ?`
    let params = [
      0,
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
module.exports = router
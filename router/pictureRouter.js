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

module.exports = router
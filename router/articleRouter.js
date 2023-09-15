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
router.post('/putArtical', (req, res) => {
    let sql = ` INSERT INTO artical (
      Name,  
      Mark,
      Content,
      Cover,
      Author,
      CreateBy,
      CreateTime
    ) VALUES (?, ?, ?, ?,?,?,?)`
    let params = [
        req.body.Name,
        req.body.Mark,
        req.body.Content,
        req.body.Cover,
        CURRENT_USER.username,
        CURRENT_USER.username,
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

//#region 编辑
router.post('/editArtical', (req, res) => {
    let sql = `UPDATE artical SET Name=?,Mark=?,Content = ?,Summary=?,Author=?,UpdateBy=?,UpdateTime=? WHERE Id = ?`
    let params = [
        req.body.Name,
        req.body.Mark,
        req.body.Content,
        req.body.Summary,
        CURRENT_USER.username,
        CURRENT_USER.username,
        CURRENT_TIMESTAMP,
        req.body.Id,
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
router.get('/getArtical', (req, res) => {
    let sql = `SELECT * FROM artical WHERE artical.DeleteFlag = ? and artical.CreateBy = ? ORDER BY artical.id DESC`
    let params = [
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

router.get('/getArticalById', (req, res) => {
    let sql = `SELECT * FROM artical WHERE artical.Id=? and artical.DeleteFlag = ? and artical.CreateBy = ? ORDER BY artical.id DESC`
    let params = [
        req.query.Id,
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
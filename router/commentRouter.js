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




router.post('/postComment', (req, res) => {
    let sql = ` INSERT INTO comment (
        ArticleId,
        Parents,  
        Content,
        IsLeaf,
        IsLike,
        Avatar,
        CreateBy,
        CreateTime
    ) VALUES (?, ?, ?, ?, ?, ?)`
    let params = [
        req.body.ArticleId,
        req.body.Parents,
        req.body.Content,
        req.body.IsLeaf,
        req.body.IsLike,
        req.body.Avatar,
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




router.get('/getComment', (req, res) => {
    let sql = `SELECT * FROM comment WHERE comment.DeleteFlag = ?`
    let params = [
      0,
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


module.exports = router
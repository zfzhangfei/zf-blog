// const mysql = require('mysql')

// // 创建连接
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'zf_blog'
// })


// // 连接数据库
// db.connect(err => {
//   if (err)  throw err
//   console.log('数据库连接成功！')
// })

// module.exports = db


var mysql = require('mysql')

var mysql_config = {

  // host: '192.168.31.117',//自己的电脑
  // host: 'localhost',
  host: '106.14.178.152',//公司服务器

  user: 'root',

  // password: '',
  password: 'ot9H3eCxbM9gs9TWgKyr61eUVbmTFVUi',

  // database: 'zf_blog',
  database: 'zf_test',

  charset: 'utf8mb4'
}


function handleDisconnection() {

  var dbServer = mysql.createConnection(mysql_config)

  dbServer.connect(function (err) {
    console.log('数据库链接成功')
    if (err) {

      setTimeout(handleDisconnection, 2000)

    }

  })

  dbServer.on('error', function (err) {

    console.log('db error', err)

    if (err.code === 'PROTOCOL_CONNECTION_LOST') {

      console.log('db error执行重连:' + err.message)

      handleDisconnection()

    } else {

      throw err

    }

  })

  return dbServer //返回一个connection对象，用于调用它的其他方法
  exports.dbServer = dbServer

}
exports.handleDisconnection = handleDisconnection

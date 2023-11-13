// var mysql = require('mysql')

// var mysql_config = {

//   // host: '192.168.31.117',//自己的电脑
//   // host: 'localhost',
//   host: '106.14.178.152',//公司服务器

//   user: 'root',

//   // password: '',
//   password: 'ot9H3eCxbM9gs9TWgKyr61eUVbmTFVUi',

//   // database: 'zf_blog',
//   database: 'zf_test',

//   charset: 'utf8mb4'
// }


// function handleDisconnection() {

//   var dbServer = mysql.createConnection(mysql_config)

//   dbServer.connect(function (err) {
//     console.log('数据库链接成功')
//     if (err) {

//       setTimeout(handleDisconnection, 2000)

//     }

//   })

//   dbServer.on('error', function (err) {

//     console.log('db error', err)

//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {

//       console.log('db error执行重连:' + err.message)

//       handleDisconnection()

//     } else {

//       throw err

//     }

//   })

//   return dbServer //返回一个connection对象，用于调用它的其他方法
//   exports.dbServer = dbServer

// }
// exports.handleDisconnection = handleDisconnection




var mysql = require('mysql');

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
};

function handleDisconnection() {

  var pool = mysql.createPool(mysql_config);
  pool.getConnection((err, connection) => {
    if(err) {
      console.log('连接池连接失败', err);
    } else {
      console.log('连接池连接成功');
      // 释放连接后，连接会返回到连接池，不需要手动关闭连接
      connection.release();
    }
  });

  // 不需要处理连接丢失的错误，因为连接池会自动处理
  // pool.on('error', function (err) {... 这段可以删掉

  return pool;  // 返回一个pool对象，用于调用它的其他方法 
}

exports.handleDisconnection = handleDisconnection;
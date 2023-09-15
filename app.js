const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/router.js')
const commentRouter = require('./router/commentRouter.js')
const articleRouter = require('./router/articleRouter.js')
const markRouter = require('./router/markRouter.js')
const pictureRouter = require('./router/pictureRouter.js')
// const commentRouter = require('./router/commentRouter.js')
// const commentRouter = require('./router/commentRouter.js')

const app = express()



//修改HTTP请求的大小限制
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
// 跨域请求处理
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X_Requested_With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  if (req.method == 'OPTIONS') res.send(200)
  /*让options请求快速返回*/ else next()
})



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router.router)
app.use(commentRouter)
app.use(articleRouter)
app.use(markRouter)
app.use(pictureRouter)
// app.use(commentRouter)
// app.use(commentRouter)

//静态托管文件
app.use(express.static('./public/images'))
app.use(express.static('./public/exam'))



app.listen('3001',() => {
  console.log('Server is running');
})
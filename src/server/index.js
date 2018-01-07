import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'

// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
// checkout following two modules in product environment
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// 引入history模式让浏览器支持
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.sendFile('./views/index.html')
})

// if you are familiar with express, you can put following
// api into server/router
app.get('/test', function (req, res) {
  res.send({'tabledata': [{
              date: '2016-05-02',
              name: 'Tom',
              address: '1518 ..'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: '1517 ..'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: '1519 ..'
            }, {
              date: '2016-05-03',
              name: 'Tom',
              address: '1516 ..'
            }]})
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// will print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(4000)

export default app

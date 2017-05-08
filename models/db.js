var mongoose = require('mongoose');
//var DB_URL = 'mongodb://localhost:27017/blog';
var DB_URL = 'mongodb://shawn:shawn593@ds133281.mlab.com:33281/shawnblog';
mongoose.Promise = global.Promise;

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
var express = require('express');
var crypto = require('crypto');
var flash = require('connect-flash');
var User = require('../models/user');

var router = express.Router();

router.use(flash());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
});

router.get('/reg',function (req,res) {
  res.render('reg',{title:'注册'});
});

router.post('/reg',function (req, res) {
  var name = req.body.name;
  var pw = req.body.pw;
  var pw_re = req.body['pw-re'];
  //校验密码是否一致
  if (pw !== pw_re){
    req.flash('error', '密码不一致');
    return res.redirect('/reg');
  }
  //生成密码的md5值
  var md5 = crypto.createHash('md5');
  var pw = md5.update(req.body.pw).digest('hex');
  var email = req.body.email;
  var wherestr = {'username' : name};
  User.find(wherestr, function(err, res){
    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log("Res:" + res);
      User.insert(name,pw,email);
    }
  })
  //User.insert(name,pw,email)
});
router.get('/login',function (req, res) {
  res.render('login', {title:'登录'});
});
router.post('/login', function (req, res) {
  
});

router.get('/post',function (req, res) {
  res.render('post', {title:'发布文章'});
});
router.post('/post',function (req,res) {
  
});
router.get('/logout',function (req,res) {
  
});











module.exports = router;

/**
 * Created by Shawn on 2017/4/28.
 */
var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:String,                    //用户账号
  userpwd: String,                        //密码
  useremail: String                     //Email
});

/*module.exports = mongoose.model('User', UserSchema);

var User = require("./user.js");*/

var User = mongoose.model('User', UserSchema);

/**
 * 插入
 */



module.exports = {
  insert : function (name,pwd,email) {
    var user = new User({
      username : name,
      userpwd: pwd,
      useremail: email,
    });

    user.save(function (err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }
    });
  },
  getByConditions : function (name){
    var wherestr = {'username' : name};
    User.find(wherestr, function(err, res){
      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }
    })
  },
};
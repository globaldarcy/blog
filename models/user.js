/**
 * Created by Shawn on 2017/4/28.
 */
var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,                    //用户账号
    userpwd: String,                        //密码
    useremail: String,                     //Email
    // dbs:String,
    // host:String,
    // port:Number,
});

module.exports = mongoose.model('User', UserSchema);
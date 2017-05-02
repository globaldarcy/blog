/**
 * Created by Shawn on 2017/4/30.
 */
var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    date:Object,
    username: String,                    //发布文章的用户
    title: String,                        //文章标题
    post: String,                     //文章内容
});

module.exports = mongoose.model('Post', PostSchema);
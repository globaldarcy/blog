/**
 * Created by Shawn on 2017/4/30.
 */
var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    date:Object,
    username: String,     //发布文章的用户
    head:String,          //头像
    title: String,        //文章标题
    tags:Array,           //标签
    post: String,         //文章内容
    comments:Array,       //评论
    reprint_info:Object,  //转载
    pv:Number,            //pv统计
});

module.exports = mongoose.model('Post', PostSchema);
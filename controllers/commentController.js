// console.log('commentController');

const Comment = require("../models/Comment");

exports.createComment = async(req, res) =>{
    try {
        const comment = await Comment.create({
            comment: req.body.comment
        })
        await comment.save();

    } catch (err) {
        console.log('Err' + err.message);
    }
}
exports.updateComment = async(req, res) =>{
    const id = req.param.id;
    try {
        const comment = await Comment.updateOne({
            
        })
    } catch (err) {
        console.log('Err' + err.message);
    }
}
exports.deleteComment = async(req, res) =>{
    const id = req.param.id;

    try {
        await Comment.deleteOne(_id === id);
    } catch (err) {
        console.log('Err' + err.message);
    }
}
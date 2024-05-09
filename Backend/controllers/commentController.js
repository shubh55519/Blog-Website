// console.log('commentController');
const jwt = require("jsonwebtoken");
const Comment = require("../models/Comment");

exports.createComment = async(req, res) =>{
    const token = req.headers.jwt;
    const decodedToken = jwt.decode(token);

    try {
        const commentCreated = await Comment.create({
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: decodedToken.id,
        })
        console.log('comment: ', commentCreated);
        await commentCreated.save();
        res.status(200).json('You commented on this blog')
    } catch (err) {
        console.log('Err ' + err);
    }
}

exports.updateComment = async(req, res) =>{
    const id = req.params.id;
    console.log(id);
    const token = req.headers.jwt;
    const decodedToken = jwt.decode(token);
    console.log('decodedToken: ', decodedToken);
    // have: Comment ID    User ID
    // need: Commenting User's ID 
    try {
        const comment = await Comment.findById(id);
        const userId = comment.user_id;
        console.log('userId: ', userId);
        if(decodedToken.id == userId){
            await Comment.updateOne({
                comment: req.body.comment,
            })
            res.status(200).json('Comment Updated')
        }else{
            res.status(401).json('User does not match')
        }
        // console.log('commentUpdated: ', commentUpdated);
    } catch (err) {
        console.log('Err ' + err.message);
    }
}

exports.deleteComment = async(req, res) =>{
    const id = req.params.id;
    const token = req.headers.jwt;
    const decodedToken = jwt.decode(token);
    try {
        const comment = await Comment.findById(id);
        const userId = comment.user_id;
        if(decodedToken.id == userId){
            await Comment.deleteOne({_id: id});
            res.status(200).json('You deleted your comment on this blog Successfully')
        }else{
            res.status(401).json('User does not match')
        }
    } catch (err) {
        console.log('Err ' + err.message);
    }
}
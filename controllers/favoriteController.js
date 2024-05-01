// console.log('favoritesController');
const jwt = require('jsonwebtoken');
const Blog = require('../models/Blog');
const Favorites = require('../models/Favorites');


exports.createFavorite = async(req, res)=>{
    const blogId = req.body.blogId;
    const token = req.headers.jwt;
    const decodedToken = jwt.decode(token);

    try {
        const blog = await Blog.findOne({_id:blogId});
        const createrId = blog.creater;
        const status = blog.status;
        const visibility = blog.visibility;
        console.log(blogId, createrId, decodedToken.id, status, visibility);
        if(createrId == decodedToken.id){
            if(status == "6630b123250f76e15ed70560"){
                const fav = await Favorites.create({
                    blog_id: blogId,
                    user_id: decodedToken.id
                })
                res.status(200).json(fav);
            }else{
                res.status(400).json({message:'Cannot set favotrite for the blog'})  
            }
        }else{
            if(status == "6630b123250f76e15ed70560" && ["6624dda25ecb701aa0f79293", "6624ddb05ecb701aa0f79299"].includes(visibility)){
                const fav = await Favorites.create({
                    blog_id: blogId,
                    user_id: decodedToken.id
                })
                res.status(200).json(fav);
        }else{
            res.status(400).json({message:'Cannot set favotrite for the blog Not creater'})  
        }
    }
        
    } catch (err) {
        console.log('Err'+ err.message);
    }
}

exports.getFavorite = async(req, res)=>{
    const id = req.param.id;
    try {
        const fav = await Favorites.findById(_id === id)
        res.status(200).json(fav)
    } catch (err) {
        console.log('Err'+ err.message);
    }
}
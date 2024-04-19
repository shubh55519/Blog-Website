const Favorites = require('../models/Favorites');

exports.createFavorite = async(req, res)=>{

    try {
        // const fav = await Favorites.create({})
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
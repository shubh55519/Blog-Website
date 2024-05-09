const Status = require("../models/Status");
const Visibility = require("../models/Visibility");

exports.getAllStatus = async (req, res) =>{
    try {
        const allStatus = await Status.find();
        res.status(200).json(allStatus);
    } catch (err) {
        console.log("getAllCategory => Err-> " + err.message);
    }
}

exports.getAllVisibility = async (req, res) =>{
    try {
        const visibility = await Visibility.find();
        res.status(200).json(visibility);
    } catch (err) {
        console.log('Err '+ err.message);
    }
}
const Location = require('../models/Location');
const Comment = require('../models/Comment');
const Likes = require('../models/Likes');

const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find()
        return res.status(200).json({ locations })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getAllLocations,
    
}
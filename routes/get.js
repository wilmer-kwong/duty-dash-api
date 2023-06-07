const Model = require('../model')

const getAllPlayerData = async (req, res) => {
    await Model.find()
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
}

const getPlayerData = async (req, res) => {
    await Model.findById(req.params.id)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
}

const getPlayerDataByUserId = async (req, res) => {
    await Model.find({ 'playerId': req.params.playerId })
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })

}

module.exports = {
    getAllPlayerData,
    getPlayerData,
    getPlayerDataByUserId,
}
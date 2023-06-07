const Model = require('../model')

const postPlayerData = async (req, res) => {
    const newPlayerData = new Model({
        playerId: req.body.playerId,
        name: req.body.name,
        experience: req.body.experience,
    })

    await newPlayerData.save()
        .then((data) => {
            res.location('/player_data/' + data._id);
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

module.exports = postPlayerData;
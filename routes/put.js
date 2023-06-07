const Model = require("../model")

const updatePlayerData = async (req, res) => {
    const id = { '_id': req.params.id };
    let newData = req.body;
    const options = { new: true };

    await Model.findOneAndReplace(id, newData, options)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(400).json(err);
        });
}

module.exports = updatePlayerData;

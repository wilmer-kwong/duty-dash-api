const Model = require("../model")

const updatePlayerData = async (req, res) => {
    const id = req.params.id;
    let newData = req.body;

    await Model.findOneAndReplace({ '_id': id }, newData, { new: true })
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(400).json(err);
        });
}

module.exports = updatePlayerData;

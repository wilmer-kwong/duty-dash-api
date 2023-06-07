const Model = require('../model')

const deletePlayerData = async (req, res) => {
    const id = req.params.id;

    await Model.findByIdAndDelete(id)
        .then((data) => {
            res.send(`${data.id}: "${data.name}" has been deleted.`);
        }).catch((err) => {
            res.status(400).json(err);
        })
}

module.exports = deletePlayerData;

const Model = require('../model')

const updatePlayerDataFields = async (req, res) => {
    const id = { '_id': req.params.id };
    let newData = req.body;
    const options = { new: true };

    await Model.findByIdAndUpdate(id, newData, options)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(400).json(err);
        })
}

module.exports = updatePlayerDataFields;

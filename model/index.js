const mongoose = require('mongoose')

const PlayerDataSchema = new mongoose.Schema({
    playerId: {
        required: true,
        type: String,
    },
    name: String,
    experience: Number,
});

module.exports = mongoose.model('player_data', PlayerDataSchema);
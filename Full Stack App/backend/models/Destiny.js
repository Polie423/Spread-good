const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinySchema = new Schema({
    subject: String,
    content: {
        type: String,
    },
});




const Destiny = mongoose.model("Destiny", DestinySchema);

module.exports = Destiny;

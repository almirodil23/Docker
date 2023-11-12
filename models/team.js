const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema(
    {
        name : String,
        city : String
    },
 )


module.exports = mongoose.model('Team', TeamSchema);
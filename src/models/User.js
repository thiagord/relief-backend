const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
name: String,
inform: String,
whatsapp: Number,
msg: [String],
location: {
    type: PointSchema,
    index: '2dsphere'
}
});

module.exports = mongoose.model('User', UserSchema);


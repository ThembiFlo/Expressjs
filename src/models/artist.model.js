let mongoose = require('mongoose');

const server = ''
const database = 'api-on-express'
const user = ''
const password = '1234'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let ArtistSchema = new mongoose.Schema({
    name: String,
    song:{
        type: String,
        required: true,
        unique: true,
    }
})

module.exports=mongoose.model('Artist', ArtistSchema);
//connect string: mongodb+srv://creamynebula:<password>@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority
let mongoose = require('mongoose')


const connectstring = 'mongodb+srv://creamynebula:TtFqeVFeC6mJG8T@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority'
//conectar ao DB
mongoose.connect(connectstring, {
    useNewUrlParser: true
})

let FerramentaSchema = new mongoose.Schema({
    "id": {
        "type": Number,
        "required": true,
        "unique": false
    }, 
    "title": {
        "type": String,
        "required": true,
        "unique": false
    },
    "link": {
        "type": String,
        "required": true,
        "unique": false
    },
    "description": {  //vou permitir descrição em branco
        "type": String,
        "required": false,
        "unique": false
    },
    "tags": {  //vou permitir ausência de tags
        "type": Array,
        "required": false,
        "unique": false
    } 
})

module.exports = mongoose.model('Ferramenta', FerramentaSchema)
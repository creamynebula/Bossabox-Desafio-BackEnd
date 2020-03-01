//connect string: mongodb+srv://creamynebula:<password>@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority
let mongoose = require('mongoose')

const connectstring = 'mongodb+srv://creamynebula:TtFqeVFeC6mJG8T@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(`${connectstring}`,{
    useNewUrlParser: true
})

let ferramentaSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        require: true
    },
    title: {
        type: String,
        require: true,
        unique: false
    },
    link: {
        type: String,
        require: true,
        unique: true
    },
    description: {  //vou permitir descrição em branco
        type: String,
        require: false,
        unique: false
    },
    tags: {  //vou permitir ausência de tags
        type: Array,
        require: false,
        unique: false
    } 
})

module.exports = mongoose.model('ferramenta', ferramentaSchema)
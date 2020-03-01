//connect string: mongodb+srv://creamynebula:<password>@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority
let mongoose = require('mongoose')
let express = require('express')
let personRoute = require('./routes/person')

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
        require: true
    },
    link: {
        type: String,
        require: true
    },
    description: {  //vou permitir descrição em branco
        type: String,
    },
    tags: {
        type: Array[String],
        require: true
    } 
})

module.exports = mongoose.model('Ferramenta', ferramentaSchema)
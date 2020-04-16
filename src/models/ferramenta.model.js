const mongoose = require('mongoose');


const connectstring = process.env.MONGODB_URI;
//conectar ao DB
mongoose.connect(connectstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //UnifiedTopology e CreateIndex é pq haviam warnings no console sugerindo usar
    useCreateIndex: true
})
    .then(res => console.log('Conectamos ao DB!'))
    .catch(err => console.log(`não conectou ao DB. Erro:\n${err}`));


const ferramentaSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: false  //não precisa ser unique porque podem ter duas ferramentas hosted no msm endereço
    },
    description: {
        type: String,
        required: false,  //vou permitir descrição em branco
        unique: false
    },
    tags: {
        type: Array,
        required: false,  //vou permitir ausência de tags
        unique: false
    }
});


module.exports = mongoose.model('Ferramenta', ferramentaSchema);

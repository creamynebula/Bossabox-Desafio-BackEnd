let mongoose = require('mongoose');

const connectstring = 'mongodb+srv://creamynebula:TtFqeVFeC6mJG8T@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority'
//conectar ao DB
mongoose.connect(connectstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //UnifiedTopology e CreateIndex é pq haviam warnings no console sugerindo usar
    useCreateIndex: true
}).
    catch(err => console.log(`não conectou ao DB. Erro:\n${err}`));

let ferramentaSchema = new mongoose.Schema({

    _id: String,
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

ferramentaSchema.methods.descriptionSize = () => {
    return this.description ? this.description.length : 0;
}; //só pra testar declarar um método, esse retorna o tamanho da descrição da ferramenta (ou 0)

ferramentaSchema.methods.numberOftags = () => {
    return this.tags ? this.tags.length : 0;
}; //retorna o número de tags da ferramenta

ferramentaSchema.methods.sameTag = (input) => {
    return this.model('Ferramenta').find({tags: this.tags}, input);
} //função que retorna todas as ferramentas com a msm tag do input, ainda a ser testada

module.exports = mongoose.model('Ferramenta', ferramentaSchema);

let mongoose = require('mongoose');

const connectstring = 'mongodb+srv://creamynebula:TtFqeVFeC6mJG8T@acertainmagicalcluster-lnor7.gcp.mongodb.net/test?retryWrites=true&w=majority'
//conectar ao DB
mongoose.connect(connectstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //UnifiedTopology e CreateIndex é pq haviam warnings no console sugerindo usar
    useCreateIndex: true
}).
    catch(error => console.log('não conectou ao DB'));

let ferramentaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    description: {  //vou permitir descrição em branco
        type: String,
        required: false,
        unique: false
    },
    tags: {  //vou permitir ausência de tags
        type: Array,
        required: false,
        unique: false
    }
});

ferramentaSchema.methods.tamanhoDescricao = () => {
    return this.description.length;
}; //só pra testar declarar um método, esse retorna o tamanho da descrição da ferramenta

ferramentaSchema.methods.numTags = () => {
    return this.tags.length;
}; //retorna o número de tags da ferramenta

module.exports = mongoose.model('Ferramenta', ferramentaSchema);

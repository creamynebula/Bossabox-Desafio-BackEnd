let FerramentaModel = require('../models/ferramenta.model');
let express = require('express');
let router = express.Router();

//criar uma nova ferramenta via POST, envie o request para localhost:3000/ferramenta
router.post('/ferramenta', async (req, res) => {
    if (!req.body) {
        res.status(400).send('Sem corpo no request T_T erro 002');
    }

    const model = new FerramentaModel(req.body);

    model.save((err, model) => {
        if (err) {
            res.status(500).send(`Não deu pra colocar ${model} no DB. Erro 003`) //500 == internal server error
            //dá erro por exemplo se tentar colocar uma ferramenta com os campos que eu defini como 'únicos' repetidos (id e link)
        }
        else {
            res.status(201).send(`Feito,\n\n${model}\n\nadicionada ao DB.`); //201 == success, created
        }
    }); //modelo salvo(201) ou erro(500)
});

//rota criada que pode ser acessada em localhost:PORT/ferramenta
// QueryString => Query propriedade no objeto 'req' (request)
//ex: localhost:3000/ferramenta?name=chihaya&age=16
//as query são key=value, o exemplo tem 2 queries

//retornar (todos?) os docs com uma certa tag
router.get('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'

    //const model = new FerramentaModel();

    if (req.query.tag) {  //se a query tem uma tag
        FerramentaModel.findOne({ tags: req.query.tag })
            .then(doc => {
                res.json(doc)
            })
            .catch(err => {
                res.status(500).send(`Algo de errado, erro 004. ${err}`)
            })
    }
});

router.delete('/ferramenta/:id', (req, res) => {  //(req, res) = 'request' e 'response'

    //const model = new FerramentaModel();

    if (req.params.id) {  //se a query tem uma tag
        FerramentaModel.findOneAndRemove({ id: req.params.id })
            .then(doc => {
                res.json(doc)
            })
            .catch(err => {
                res.status(500).send('Algo de errado, erro 005')
            })
        if (err) {
            res.status(404).send(`Deu ruim. Erro 006`);
        }
    }
});

/*
//subrota de 'ferramenta' que vai ser mapeada para a variável 'name'
//propriedade 'params' no objeto 'req' (request)
//ex: localhost:3000/ferramenta/chihaya
router.get('/ferramenta/:name', (req, res) => {  //(req, res) = 'request' e 'response'
    res.send(`Você pediu a ferramenta chamada ${req.params.name}`)   //envia uma mensagem dizendo o que o user pediu
});
*/

module.exports = router;
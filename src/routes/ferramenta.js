let ferramentaModel = require('../models/ferramenta.model')
let express = require('express')
let router = express.Router()

//rota criada que pode ser acessada em localhost:PORT/ferramenta
// QueryString => Query propriedade no objeto 'req' (request)
//ex: localhost:3000/ferramenta?name=chihaya&age=16
//as query são key=value, o exemplo tem 2 queries
router.get('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'
    if (req.query.name) {  //se a query tem um nome
        res.send(`Você pediu a ferramenta chamada ${req.query.name}`)
    }
    else {
        res.send('Você pediu uma pessoa.')
    }
    
})

//subrota de 'ferramenta' que vai ser mapeada para a variável 'name'
//propriedade 'params' no objeto 'req' (request)
//ex: localhost:3000/ferramenta/chihaya
router.get('/ferramenta/:name', (req, res) => {  //(req, res) = 'request' e 'response'
    res.send(`Você pediu a ferramenta chamada ${req.params.name}`)   //envia uma mensagem dizendo o que o user pediu
})

router.get('/error', (req, res) => {
    throw new Error('Deu ruim ;_; código 683746') //daqui vai pra funcao que lida com erro 500 no index.js
})

//criar uma nova ferramenta via POST pra localhost:3000/ferramenta
router.post('/ferramenta', (req, res) => {
    if(!req.body) {
        //retorna status 400 (bad request) e manda uma msg
        return res.status(400).send('Sem corpo no request T_T')
    }

    /*
    exemplo de ferramenta, é isso que vai no req.body
    let tool1 = {
        id: 7,
        title: 'martelo virtual',
        link: 'martelovirtual.com',
        description: 'Um martelo... virtual.',
        tags: ['madeira','','']
    }
    */

    //se tem body, vamos criar uma ferramenta e add no DB
    let model = new ferramentaModel(req.body)
    model.save()  //isso vai mandar pro DB (mongoose -> mongodriver -> DB)
        .then(doc => {  //depois que salvamos: com o doc que foi saved (doc é um array de documents)
            if(!doc || doc.length === 0) { //se não tem doc
                return res.status(500).send(doc)
            }
            //se tem doc: 201 = resource was created
            res.status(201)
        })
        .catch(err => {  //lidar com erros
            res.status(500).json(err)
        })
})

module.exports = router
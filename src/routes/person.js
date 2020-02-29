let express = require('express')
let router = express.Router()



//rota criada que pode ser acessada em localhost:PORT/person
// QueryString => Query propriedade no objeto 'req' (request)
//ex: localhost:3000/person?name=chihaya&age=16
//as query são key=value, o exemplo tem 2 queries
router.get('/person', (req, res) => {  //(req, res) = 'request' e 'response'
    if (req.query.name) {  //se a query tem um nome
        res.send(`Você pediu a pessoa chamada ${req.query.name}`)
    }
    else {
        res.send('Você pediu uma pessoa.')
    }
    
})  //call o object 'person'

//subrota de 'person' que vai ser mapeada para a variável 'name'
//propriedade 'params' no objeto 'req' (request)
//localhost:3000/person/chihaya
router.get('/person/:name', (req, res) => {  //(req, res) = 'request' e 'response'
    res.send(`Você pediu a pessoa chamada ${req.params.name}`)   //envia uma mensagem dizendo o que o user pediu
})


module.exports = router  //agora pode importar o router no index.js
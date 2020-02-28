let express = require('express')
let router = express.Router()



//rota criada que pode ser acessada em localhost:PORT/person
router.get('/person', (req, res) => {  //(req, res) = 'request' e 'response'
    res.send('Você pediu uma pessoa.')   //envia uma mensagem dizendo o que o user pediu
})  //call o object 'person'



module.exports = router  //agora pode importar o router no index.js
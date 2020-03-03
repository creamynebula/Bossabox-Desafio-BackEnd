let FerramentaModel = require('../models/ferramenta.model');
let express = require('express');
let router = express.Router();

//rota criada que pode ser acessada em localhost:PORT/ferramenta
// QueryString => Query propriedade no objeto 'req' (request)
//ex: localhost:3000/ferramenta?name=chihaya&age=16
//as query são key=value, o exemplo tem 2 queries
/*
router.get('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'
    if (req.query.tag) {  //se a query tem uma tag
        FerramentaModel.find
    }
    else {
        res.send('Você pediu uma ferramenta.')
    }
    
})
*/


//subrota de 'ferramenta' que vai ser mapeada para a variável 'name'
//propriedade 'params' no objeto 'req' (request)
//ex: localhost:3000/ferramenta/chihaya
router.get('/ferramenta/:name', (req, res) => {  //(req, res) = 'request' e 'response'
    res.send(`Você pediu a ferramenta chamada ${req.params.name}`)   //envia uma mensagem dizendo o que o user pediu
});

router.get('/error', (req, res) => {
    throw new Error('Deu ruim ;_; código 683746') //daqui vai pra funcao que lida com erro 500 no index.js
});

//criar uma nova ferramenta via POST pra localhost:3000/ferramenta
router.post('/ferramenta', async (req, res) => {
    if (!req.body) {
      return res.status(400).send('Sem corpo no request T_T erro 66256');
    }
  
    try {
      const model = new FerramentaModel(req.body);
      const doc = await model.save();
      if (doc || doc.length) {
        return res.status(201);
      }
      return res.status(500).send(doc);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
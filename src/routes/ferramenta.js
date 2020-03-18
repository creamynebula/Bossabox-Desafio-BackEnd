let FerramentaModel = require('../models/ferramenta.model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//criar uma nova ferramenta via POST, envie o request para localhost:3000/ferramenta
//o conteúdo do request (a ferramenta) deve ir no corpo em formato JSON
//a resposta é o objeto adicionado (com a id gerada)
router.post('/ferramenta', (req, res) => {
    if (!req.body) {  //se o request não tem corpo
        res.status(400).send('Sem corpo no request T_T erro 002'); //400 = bad request
    }

    const model = new FerramentaModel(req.body);  //cria model com a ferramenta
    model._id = new mongoose.Types.ObjectId(); //gera um id (ObjectId("stringrandombemgrande"))
    model._id.toString(); //converte id pra string

    model.save((err, doc) => {  //colocar no DB
        if (err) res.status(500).send(`Não deu pra colocar ${model} no DB. Erro 003. ${err}`) //500 == internal server error
        //dá erro por exemplo se tentar colocar uma ferramenta com os campos que eu defini como 'únicos' repetidos (id e link)
        else res.status(201).send(doc); //201 == success, created
    });
});


//GET localhost:PORT/ferramenta
//ex: localhost:3000/ferramenta?tag=martelos
//as query são key=value, o exemplo tem 1 query que contém o objeto 'tag' e 'age'

//Retornar todas as ferramentas (get /ferramenta) ou
//Retornar todas as ferramentas com uma dada tag (/ferramenta?tag=nomeDaTag)
router.get('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'

    if (req.query.tag) {  //se a query tem uma tag
        FerramentaModel.find({
            tags: req.query.tag
        },
        (err, result) => {
            if (err) res.status(500).send(`Algo de errado, erro 004. ${err}`);
            else res.status(200).send(result);  //200 = OK. GET: The resource has been fetched and is transmitted in the message body.
        })
    }
    //Se não tiver corpo vamos retornar todas as ferramentas
    else if (!req.query.body) { 
        FerramentaModel.find({}, (err, result) => {  //find com query objeto vazio retorna todos os objetos
            if (err) res.status(500).send(`Algo de errado, erro 004/2. ${err}`);
            else res.status(200).send(result); 
        })
    }
    else {
        res.status(400).send('Bad request, query inválida. Erro 004/3');
    }

});


router.delete('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'

    //deletar todas as ferramentas com uma certa tag
    if (req.query.tag) { //se a query tem tag
        FerramentaModel.deleteMany({  //({query}, callback)
            tags: req.query.tag
        },
        (err, result) => {
            if (err) res.status(500).send(`Algo de errado, erro 005/1. ${err}`)
            else res.status(204).send(result)
        })
    }
    //deletar por título
    else if (req.query.title) { //se a query tem title
        FerramentaModel.deleteOne({
            title: req.query.title
        },
        (err, result) => {
            if (err) res.status(500).send(`Algo de errado, erro 005/2. ${err}`)
            else res.status(204).send(result)
        })
    }
    //deletar uma ferramenta por id
    else if (req.query.id) { //se a query tem id
        FerramentaModel.deleteOne({
            _id: req.query.id
        },
        (err, result) => {
            if (err) res.status(500).send(`Algo de errado, erro 005/3. ${err}`)
            else res.status(204).send(result)  //204 No Content success
        })
    }

    else {  //se a query tem uma id
        res.status(400).send('Bad request, query vazia ou inválida. Erro 005/4');
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
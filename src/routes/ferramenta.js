const FerramentaModel = require('../models/ferramenta.model');
const express = require('express');
const mongoose = require('mongoose');
const sanitize = require('mongo-sanitize'); //mongoDB queries começando com $ passam a throw a error

const router = express.Router();

//criar uma nova ferramenta via POST, envie o request para localhost:3000/ferramenta
//a resposta é o objeto adicionado (com a id gerada pelo server)
router.post('/ferramenta', (req, res) => {
    const body = req.body;

    if (!body)
        res.status(400).send('Erro: Request vazio.'); //400 = bad request

    else if (typeof body.title !== 'string' || typeof body.link !== 'string' || typeof body.description !== 'string') {
        res.status(400).send('Erro: Os dados que descrevem a ferramenta devem ser strings!'); //termina o request
    }
    else if (!Array.isArray(body.tags)) {
        res.status(400).send('Erro: O campo "tags" não é um array!');
    }

    else {
        const ferramenta = new FerramentaModel({
            title: body.title,
            link: body.link,
            description: body.description,
            tags: body.tags
        });
        ferramenta._id = new mongoose.Types.ObjectId(); //gera um id (ObjectId("stringrandombemgrande"))
        ferramenta._id.toString(); //converte id pra string
        ferramenta.save()
            .then(x => res.status(201).send(x))
            .catch(err => res.status(500).send(`Erro ao salvar no DB. ${err}`))
    }
});

//retornar todas as ferramentas (GET /ferramenta) ou
//retornar todas as ferramentas com uma dada tag (GET /ferramenta?tag=nomeDaTag)
router.get('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'
    if (req.query.tag) {  //se a query tem uma tag
        FerramentaModel.find({ tags: req.query.tag })
            .then(x => res.status(200).send(x))
            .catch(err => res.status(500).send(err));

    }
    //Se não tiver corpo vamos retornar todas as ferramentas
    else if (!req.query.body) {
        FerramentaModel.find({}) //find com query objeto vazio retorna todos os objetos
            .then(x => res.status(200).send(x))
            .catch(err => res.status(500).send(err));
    }
    else res.status(400).send('Bad request, query inválida.');
});


router.delete('/ferramenta', (req, res) => {  //(req, res) = 'request' e 'response'
    //deletar todas as ferramentas com uma certa tag
    if (req.query.tag) { //se a query tem tag

        FerramentaModel.deleteMany({ tags: req.query.tag })
            .then(x => res.status(204).send(x)) //204 == No Content
            .catch(err => res.status(500).send(`Erro. ${err}`)) // 500 == internal server error
    }
    //deletar por título
    else if (req.query.title) { //se a query tem title
        FerramentaModel.deleteOne({ title: req.query.title })
            .then(x => res.status(204).send(x))
            .catch(err => res.status(500).send(`Erro. ${err}`))
    }
    //deletar uma ferramenta por id
    else if (req.query.id) { //se a query tem id
        FerramentaModel.deleteOne({ _id: req.query.id })
            .then(x => res.status(204).send(x))
            .catch(err => res.status(500).send(`Erro. ${err}`))
    }
    else {
        res.status(400).send('Bad request, query inválida.');
    }
});


module.exports = router;
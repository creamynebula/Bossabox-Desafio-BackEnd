require('dotenv').config(); //isso precisa vir 1o para a URI do DB estar disponível globalmente
const express = require('express');
const cool = require('cool-ascii-faces');
const ferramentaRoute = require('./routes/ferramenta');

const app = express();

//para poder usar req.body para lidar com os requests
app.use(express.json());


const requestLogger = (req, res, next) => {
    //middleware que sempre é executado
    console.log("Method:", req.method);
    console.log("Path:  ", req.path);
    console.log("Body:  ", req.body);
    console.log("---");
    next(); //passa o controle para o próximo middleware, todo middleware custom que não retorne uma resposta deve terminar com next();
};
app.use(requestLogger);

//dizendo ao express pra usar as rotas definidas em ferramenta.js
app.use(ferramentaRoute);

//lidar com erro 404
const unknownEndpoint = (req, res) => {
    //esse middleware tem de ser declarado depois das rotas
    //então ele será chamado apenas se nenhuma rota declarada souber lidar com o request
    res.status(404).send(`${cool()} \nUnknown Endpoint! Confira as rotas disponíveis na documentação. Para listar todas as ferramentas é /ferramenta`);
};

app.use(unknownEndpoint);


//process environment PORT ou 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`));
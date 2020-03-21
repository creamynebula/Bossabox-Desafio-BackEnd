const express = require('express')  //importando o módulo express
const app = express()  //executando a função express() do módulo 'express' pra iniciar a app

let path = require('path')
let bodyParser = require('body-parser')
let ferramentaRoute = require('./routes/ferramenta')


//pega qualquer incoming json string e cria um atributo 'body', então agora podemos usar req.body
app.use(bodyParser.json())

app.use(ferramentaRoute)  //dizendo ao express pra usar ferramentaRoute, aka ferramenta.js

//express.static é uma built-in (no express) middleware function pra servir arquivos estáticos
app.use('/', express.static('public'))  //os static files vem de root/public

//lidar com erro 404
app.use((req, res) => {
    res.status(404).send(`Aonde você está tentando ir? Confira o readme ou o API-Blueprint para se informar sobre as rotas disponíveis.`)
})

//lidar com erro 500 (internal server error)
//qdo dá erro 500 vamos pra página especial 500.html
app.use((err, req, res) => { //essa função recebe um error object 'err' também
    console.error(err.stack) //isso imprime no console o caminho do erro, incluindo a msg que foi Thrown na ocasiao do erro
    console.error(`o request foi ${req}`)
    res.sendFile(path.join(__dirname, '../public/500.html')) //__dirname = cwd = root/src/
})

//const PORT = process.env.PORT || 3000 //process environment PORT ou 3000
const PORT = 3000;

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`))
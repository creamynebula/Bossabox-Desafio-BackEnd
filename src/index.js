const express = require('express')  //importando o módulo express
const app = express()  //executando a função express() do módulo 'express' pra iniciar a app

/*daria pra criar outras apps diferentes, cada um com seus próprios requests e responses
o express tem funcoes tipo get, post, put etc que podemos chamar com app.get agora!
as funcoes levam 2 parâmetros:
o 1o é uma url aonde ela vai agir (ser chamada se a url for executada)
o 2o são request, response e outros parâmetros úteis na comunicação com o client
middleware function: executa qualquer código, faz mudanças em 'req' e 'res', termina o ciclo req-res, chama a próxima func middleware no stack
quando você chama app.use( () => {}) você está definindo a middleware function.
todas as middleware functions vao ser executadas (se houver next()) se nenhuma delas encerrar o ciclo req-res
opcionalmente pode fazer app.use('blabla', () => {}) que essa middleware soh vai handle requests pra rota 'blabla'
*/

let path = require('path')
let bodyParser = require('body-parser')
let ferramentaRoute = require('./routes/ferramenta')


//pega qualquer incoming json string e cria um atributo 'body', então agora podemos usar req.body
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => Url usada: ${req.originalUrl}, Corpo do req: ${req.body}`)

    next()  //chama a próxima função na pipeline, senão o client vai esperar até o timeout
})

app.use(ferramentaRoute)  //dizendo ao express pra usar ferramentaRoute, aka ferramenta.js

//express.static é uma built-in (no express) middleware function pra servir arquivos estáticos
app.use('/', express.static('public'))  //os static files vem de root/public

// lidar com erro 404
app.use((req, res, next) => {
    res.status(404).send('Aonde você está tentando ir?')

})

// lidar com erro 500 (internal server error)
// qdo dá erro 500 vamos pra página especial 500.html
app.use((err, req, res, next) => { //essa função recebe um error object 'err' também
    console.error(err.stack) //isso imprime no console o caminho do erro, incluindo a msg que foi Throwed na ocasiao do erro
    res.sendFile(path.join(__dirname, '../public/500.html')) //__dirname = cwd = root/src/
})

const PORT = process.env.PORT || 3000 //process environment PORT ou 3000

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`)) //os backticks é pra poder colocar variável na string
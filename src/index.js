let express = require('express')
let app = express()



let personRoute = require('./routes/person')  //local da rota, note que não precisa colocar .js

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)

    next()  //chama a próxima função na pipeline, senão o client vai esperar até o timeout
})
app.use(personRoute)  //dizendo ao express pra usar personRoute
app.use(express.static('public'))  //os static files vem de root/public


const PORT = process.env.PORT || 3000 //process environment PORT ou 3000

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`)) //os backticks é pra poder colocar variável na string
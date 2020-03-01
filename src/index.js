let express = require('express')
let app = express() 


let personRoute = require('./routes/person')  //local da rota, note que não precisa colocar .js
let path = require('path')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => Url usada: ${req.originalUrl}`)

    next()  //chama a próxima função na pipeline, senão o client vai esperar até o timeout
})
app.use(personRoute)  //dizendo ao express pra usar personRoute, aka person.js
app.use(express.static('public'))  //os static files vem de root/public

// lidar com erro 404
app.use((req, res, next) => {
    res.status(404).send('Aonde você está tentando ir?')

})

// lidar com erro 500 (internal server error)
// qdo dá erro 500 vamos pra página especial 500.html
app.use((err, req, res, next) => { //essa função recebe um error object 'err' também
    //console.error(err.stack) //isso imprime no console o caminho do erro, incluindo a msg que foi Throwed na ocasiao do erro

    res.sendFile(path.join(__dirname, '../public/500.html')) //__dirname = cwd = root/src/
})

const PORT = process.env.PORT || 3000 //process environment PORT ou 3000

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`)) //os backticks é pra poder colocar variável na string
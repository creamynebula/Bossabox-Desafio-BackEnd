let express = require('express')
let app = express()

app.use(express.static('public'))  //os static files vem de root/public

let personRoute = require('./routes/person')  //local da rota, note que não precisa colocar .js
app.use(personRoute)  //dizendo ao express pra usar personRoute


const PORT = process.env.PORT || 3000 //process environment PORT ou 3000

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`)) //os backticks é pra poder colocar variável na string
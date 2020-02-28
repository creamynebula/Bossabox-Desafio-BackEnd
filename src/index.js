let express = require('express')
let app = express(

)

app.use(express.static('public'))  //os static files vem de root/public

const PORT = process.env.PORT || 3000 //process environment PORT ou 3000

app.listen(PORT, () => console.info(`Servidor rodando na porta ${PORT}`)) //os backticks é pra poder colocar variável na string
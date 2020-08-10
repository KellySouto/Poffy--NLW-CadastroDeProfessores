//servidor
const express= require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses,  saveClasses } = require('./pages')


//configurara nunjuncks
const nunjcks=require('nunjucks')
nunjcks.configure('src/views',{
    express:server,
    noCache:true,
})

server
//receber os dados  do requi body
.use(express.urlencoded({ extended: true}))
//configurara arquivos estaticos(cs,scripts,imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)   
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
 
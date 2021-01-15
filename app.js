const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const rotaUser = require('./routes/usuario'); 
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false})); // dados simples
app.use(bodyparser.json());
// CORS
app.use((req,res,next)=>{
    // res.header("Access-Control-Allow-Origin",'servidorespecifico.com.br');
    res.header("Access-Control-Allow-Origin",'*');

    res.header("Access-Control-Allow-Header","Origin,X-Requested-With,Accept,Authorization,Content-Type");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods",'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }
    next();
})
// ========================
// ROTAS


app.use('/user',rotaUser);



// FIM ROTAS
// ========================
// rota de erro
app.use((req,res,next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})
module.exports = app;
//imports
const express = require('express');
const path = require('path');
const formController = require('./controllers/formulario-controller');
const bodyParse = require('body-parser')
const port = process.env.PORT || 3001

//comentario
//configs 
const app = express();
app.set('view engine', 'ejs');


//middlewares
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParse.urlencoded())

//routes
app.get('/', (req, res, next) => {
    res.render('home')
});
app.get('/sobre', (req, res, next) => {
    res.render('sobre')
});
app.get('/formulario', formController.FormGet);

app.post('/formulario', formController.FormPost);


app.listen(port, () => {
    console.log('o servidor esta rodando');
}); 
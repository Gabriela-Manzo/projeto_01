const fs = require('fs');
const ejs = require('ejs');
const htmlToPdf = require('html-pdf-node');
const generoModel = require('../models/genero-models')
const filialModel = require('../models/filial-model')
const planoModel = require('../models/plano-model')

const handlerGetForm = (req, res, next) => {
    
    //genero
    const dataGenero = generoModel.getAllGenero();
    //chamada getAllGenero e mandando executar
    const generoItensViewModel = dataGenero.map((item) => {
        //map é um método do js para manipular arrays, passando por cada item
        return{
            value: item.id,
            lable: item.descricao
        }
    })

    // filial

    const dataFilial = filialModel.getAllFilial();
    const filialItensViewModel = dataFilial.map((item) => {

        return{
            value: item.id,
            lable: `${item.id} - ${item.des}`,
        }
    })

    // plano

    const dataPlano = planoModel.getAllPlano();
    const planoItensViewModel = dataPlano.map((item) => {

        return {
            value: item.id,
            lable: item.des
        }
    })
    
    const getViewModel = {
        genero: generoItensViewModel,
        filial: filialItensViewModel,
        plano: planoItensViewModel,
    }
    
    res.render('formulario', getViewModel);
}


const handlerPostForm = (req, res, next) => {
    // console.log(req.body);
   
    const body = req.body;

    const generoResult = generoModel.getGeneroPorId(body.gender); 

    const filialResult = filialModel.getFilialPorId(body.filial);

    const planoResult = planoModel.getPlanolPorId(body.plano);

    const viewModel = {
        
        nome: body.name,
        Nascimento: body.date,
        telefone: body.tel,
        email: body.email,
        endereço: body.adress,
        genero: generoResult.descricao,
        filial: filialResult.des,
        plano: planoResult.des,
    };

    // console.log(htmlText);
    
    // trasformar em pdf
    var htmlText = fs.readFileSync('./views/formulario-template.ejs', 'utf8')
    var htmlPronto = ejs.render(htmlText, viewModel);
    
    console.log(htmlPronto);
    
    let options = {format: 'A4', printBackground: true};
    let file = {content: htmlPronto};
    htmlToPdf.generatePdf(file, options)
        .then(pdfBuffer => {
            res.contentType("application/pdf");
            res.send(pdfBuffer);
        });

};

module.exports = {
    FormGet: handlerGetForm,
    FormPost: handlerPostForm
};
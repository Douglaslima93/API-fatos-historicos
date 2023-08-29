import express from 'express';
import {servicoBuscarFatoPorAno, servicoValidoAno} from './servico/servico.js';


const app = express();

app.get('/',(req,res) => {

    let anoFato = req.query.ano;

    if (servicoValidoAno(anoFato))
    {
            var fato = servicoBuscarFatoPorAno(anoFato);
            res.json({fato:fato})
    }
    else 
    {
        res.status(400).json({erro:'Parâmetro ano invalido'});
    }

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});
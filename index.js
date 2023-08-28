//import express from 'express';
import servicoBuscarFatoPorAno from './servico/servico.js';

const express = require('express')
const app = express();

app.get('/',(req,res) => {

    let anoFato = req.query.ano;

    var fato = servicoBuscarFatoPorAno(anoFato);

    res.json({ano:fato});
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});
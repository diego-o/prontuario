'use strict'

const express = require('express');
const router = express.Router();

router.get('/colaborador', (req, res, next) => {
    res.status(200).send({
        title: "API de Cadastro de Colaboradores do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

module.exports = router;
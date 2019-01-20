'use strict'

const express = require('express');
const router = express.Router();

router.get('/paciente', (req, res, next) => {
    res.status(200).send({
        title: "API de Cadastro de Pacientes do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

module.exports = router;
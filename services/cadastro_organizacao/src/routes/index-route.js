'use strict'

const express = require('express');
const router = express.Router();

router.get('/organizacao', (req, res, next) => {
    res.status(200).send({
        title: "API de Cadastro de Organizações do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

module.exports = router;
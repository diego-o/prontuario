'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API de Cadastro do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

module.exports = router;
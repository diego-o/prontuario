'use strict';

const express = require('express');
const controller = require ('../controller/PacienteController');

const router = express.Router();

router.post('/', controller.Insert);
router.put('/:id', controller.Update);

router.get('/:cpf', controller.GetByCpf);
router.get('/carteirasus/:carteiraSus', controller.GetByCarteiraSus);
router.get('/cpfmae/:cpfMae', controller.GetByCpfMae);
router.get('/cpfpai/:cpfPai', controller.GetByCpfPai);

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API de Cadastro de Pacientes do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

module.exports = router;

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

module.exports = router;

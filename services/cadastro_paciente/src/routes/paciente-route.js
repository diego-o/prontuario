'use strict';

const express = require('express');
const controller = require ('../controller/paciente-controller');

const router = express.Router();

router.post('/', controller.post);
router.put('/:id', controller.put);

router.get('/:cpf', controller.getByCpf);
router.get('/carteirasus/:carteiraSus', controller.getByCarteiraSus);
router.get('/cpfmae/:cpfMae', controller.getByCpfMae);
router.get('/cpfpai/:cpfPai', controller.getByCpfPai);

module.exports = router;
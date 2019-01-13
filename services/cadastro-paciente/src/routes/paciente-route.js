'use strict';

const express = require('express');
const controller = require ('../controller/paciente-controller');

const router = express.Router();

router.get('/:cpf', controller.getByCpf);

router.post('/', controller.post);

module.exports = router;
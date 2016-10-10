var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/clientes', db.getAllClients);
router.get('/api/clientes/:id', db.getSingleClient);
// router.post('/api/clientes', db.createClient);
// router.put('/api/clientes/:id', db.updateClient);
// router.delete('/api/clientes/:id', db.removeClient);

module.exports = router;
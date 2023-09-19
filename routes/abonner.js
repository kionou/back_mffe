var express = require('express');
// const UserControler = require('../controllers/controUser');
const {requireAuth} = require('../middlewares/jsonwebtoken');
const dataAbonner = require('../controllers/controAbonner');


var router = express.Router();

router.get('/',dataAbonner.AllAbonner);
router.post('/',dataAbonner.PostAbonner);
router.get('/:id', dataAbonner.GetAbonnerbyId);
router.put('/:id',dataAbonner.UpdateAbonner);
router.delete('/:id',dataAbonner.DeleteAbonner);



module.exports = router;

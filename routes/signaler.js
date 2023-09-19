var express = require('express');
const dataSignaler = require('../controllers/controSignaler');
// const {requireAuth} = require('../middlewares/jsonwebtoken');


var router = express.Router();

router.get('/',dataSignaler.AllSignaler);
router.post('/',dataSignaler.PostSignaler);
router.get('/:id', dataSignaler.GetSignalerbyId);
router.put('/:id',dataSignaler.UpdateSignaler);
router.delete('/:id',dataSignaler.DeleteSignaler);

module.exports = router;

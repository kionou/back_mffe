var express = require('express');
// const {requireAuth} = require('../middlewares/jsonwebtoken');
const dataCentre = require('../controllers/controCentre');




var router = express.Router();

router.get('/',dataCentre.AllCentre);
router.post('/',dataCentre.PostCentre);
router.get('/:id', dataCentre.GetCentrebyId);
router.put('/:id',dataCentre.UpdateCentre);
router.delete('/:id',dataCentre.DeleteCentre);



module.exports = router;

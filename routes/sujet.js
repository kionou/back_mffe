var express = require('express');
// const UserControler = require('../controllers/controUser');
const {requireAuth} = require('../middlewares/jsonwebtoken');
const dataSujet = require('../controllers/controSujet');



var router = express.Router();

router.get('/',dataSujet.AllSujet);
router.post('/1',dataSujet.PostSujet);
router.get('/:id', dataSujet.GetSujetbyId);
router.put('/:id',dataSujet.UpdateSujet);
router.delete('/:id',dataSujet.DeleteSujet);



module.exports = router;

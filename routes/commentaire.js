var express = require('express');
const dataCommentaire = require('../controllers/controCommentaire');
// const {requireAuth} = require('../middlewares/jsonwebtoken');





var router = express.Router();

router.get('/',dataCommentaire.AllCommentaire);
router.post('/',dataCommentaire.PostCommentaire);
router.get('/:id', dataCommentaire.GetCommentairebyId);
router.put('/:id',dataCommentaire.UpdateCommentaire);
router.delete('/:id',dataCommentaire.DeleteCommentaire);



module.exports = router;

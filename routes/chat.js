var express = require('express');
const {requireAuth} = require('../middlewares/jsonwebtoken');
const dataChat = require('../controllers/controChat');



var router = express.Router();

router.get('/',dataChat.AllChat);
router.post('/1',dataChat.PostChat);
router.get('/:id', dataChat.GetChatbyId);
router.put('/:id',dataChat.UpdateChat);
router.delete('/:id',dataChat.DeleteChat);



module.exports = router;

var express = require('express');
const UserControler = require('../controllers/controUser');
const {requireAuth} = require('../middlewares/jsonwebtoken');
const upload = require('../middlewares/multer');


var router = express.Router();

router.get('/check-user',requireAuth,UserControler.CheckUser);
router.post('/sign-in-user',UserControler.UserSign);
router.get('/all-users',requireAuth, UserControler.UserAll);
router.get('/:id', UserControler.UserOne);
router.post('/sign-up-user',UserControler.Login);
router.put('/:id',requireAuth,UserControler.UpdateUser);
router.put('/photo/:id',upload.single('image'),UserControler.UpdateUserPicture);
router.delete('/:id',UserControler.DeleteUser);







/* GET users listing. */
router.get('/', function(req, res, next) {

});

module.exports = router;

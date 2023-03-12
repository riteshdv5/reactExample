const router = require("express").Router();
const { catchError } = require('../handlers/errorHandlers');
const chatRoomController  = require('../controllers/chatRoomController')
const auth = require('../middleWares/auth')

router.post('/', auth, catchError(chatRoomController.createChatRoom));
 
module.exports = router;
const router = require("express").Router();
const { catchError } = require('../handlers/errorHandlers');
const userController  = require('../controllers/userController')

router.post('/register', catchError(userController.register));
router.post('/login', catchError(userController.login));

module.exports = router;
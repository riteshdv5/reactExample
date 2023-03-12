const router = require("express").Router();
const { catchError } = require('../handlers/errorHandlers');
const controller = require("../controllers/fileController");

router.post('/uploadfile', catchError(controller.upload));
router.get('/files', controller.getListFiles);
router.get('/files/:name', controller.download);


module.exports = router;
const controller = require('../controllers/messages-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/municipalities/messages/:municipality', controller.messagesGet)
    .post('/municipalities/messages/:municipality', controller.messagesPost)

module.exports = router;
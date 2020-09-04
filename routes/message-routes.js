const controller = require('../controllers/messages-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/messages/:municipality', controller.messagesGet)
    .post('/messages/:municipality', controller.messagesPost)

module.exports = router;
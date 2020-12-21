const controller = require('../controllers/auth-controller'),
        express = require('express'),
        router = express.Router();

router
    .get('/groups-login', controller.groupsLogIn)
    .post('/groups-login', controller.groupsLogInPost)
    .get('/groups-signup', controller.groupsSignUp)
    .post('/groups-signup', controller.groupsSignUpPost)
    .get('/municipalities', controller.municipalities)

module.exports = router;
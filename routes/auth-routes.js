const controller = require('../controllers/auth-controller'),
        express = require('express'),
        router = express.Router(),
        authToken = require('../middlewares/auth');

router
    .get('/groups-login', controller.groupsLogIn)
    .post('/groups-login', controller.groupsLogInPost)
    .get('/groups-signup', controller.groupsSignUp)
    .post('/groups-signup', controller.groupsSignUpPost)
    .get('/municipalities', authToken, controller.municipalities)

module.exports = router;
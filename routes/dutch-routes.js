const controller = require('../controllers/dutch-controller'),
      express = require('express'),  
      router = express.Router();

router
    .get('/', controller.home)
    .get('/shops', controller.shops)
    .get('/education', controller.education)
    .get('/documents', controller.documents)
    .get('/second-hand', controller.secondHand)
    .get('/city-trip', controller.cityTrip)
    .get('/going-out', controller.goingOut)
    .get('/groups-login', controller.groupsLogIn)
    .get('/groups-signup', controller.groupsSignUp)


module.exports = router;
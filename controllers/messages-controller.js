const messageModel = require('../models/message-model'),
    errors = require('../middlewares/errors');

const ControllerMessages = ()=>{

};

ControllerMessages.messagesGet = (req, res, next) => {
    let locals = {
        title: "Messages to the group"
    }
    res.render('messages', locals)
}


ControllerMessages.messagesPost = (req, res, next) => {
    
}

module.exports = ControllerMessages;

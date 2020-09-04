const messageModel = require('../models/message-model'),
    errors = require('../middlewares/errors');

const ControllerMessages = ()=>{

};

ControllerMessages.messagesGet = (req, res, next) => {
    messageModel.get((docs)=>{
        let locals = {
            title: "Mensajes del grupo",
            //user: req.session.username, //o bien con el email
            data: docs
        }
        res.render('messages.pug',locals)
    })
}

ControllerMessages.messagesPost = (req, res, next) => {
    
}

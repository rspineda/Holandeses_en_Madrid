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
    const message = {
        municipality : req.body.municipality,
        username : req.body.username,
        email : req.body.email,
        message : req.body.message
    }
    //console.log('esto me va a llegar en el messagePost: ',message)
    messageModel.save(message, ()=>{res.redirect("/municipalities")})
}

module.exports = ControllerMessages;

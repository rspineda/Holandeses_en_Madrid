const messageModel = require('./message-schema');

const Message = ()=>{

};

Message.get = ()=>{

}

Message.save = (doc,cb)=>{
    messageModel.create(doc, (err)=>{
        if(err) throw err;
        cb(doc);
    })
}

module.exports = Message;
const messageModel = require('./message-schema');

const Message = ()=>{

};

Message.get = (muni, cb)=>{
    messageModel.aggregate([
        {$match: {municipality: `${muni}`}}
    ]).exec((err,docs)=>{
        if(err) throw error;
        cb(docs);
    })
}

Message.save = (doc,cb)=>{
    messageModel.create(doc, (err)=>{
        if(err) throw err;
        cb(doc);
    })
}

module.exports = Message;
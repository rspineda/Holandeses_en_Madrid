const mongoose = require('./mongo-connection'),
      Schema = mongoose.Schema;

const messageSchema = new Schema({
    municipality : "string",
    username : "string",
    email : "string",
    message : "string"
});

Message = mongoose.model("Message", messageSchema);

module.exports = Message;
const mongoose = require('./mongo-connection'),
        Schema = mongoose.Schema;

const userSchema = new Schema({
    username: "string",
    password: "string",
    email: "string",
    minicipality: "string",
    othermunicipality: "string"
});

User = mongoose.model("User", userSchema);

module.exports = User;


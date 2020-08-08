const config = require('./db-config'),
      mongoose = require('mongoose');  

const connect = () => mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`, {useNewUrlParser: true, useUnifiedTopology: true});

connect()
    .then(data => console.log("CONNECTED--->", data))
    .catch(err => console.warn("ERROR!--->", err));

module.exports = mongoose; 
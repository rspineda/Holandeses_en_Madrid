const authModel = require('./user-schema');

const Auth = ()=>{

};

Auth.getUser = ()=>{

};

Auth.setUser = (doc,cb)=>{
    authModel.create(doc, (err)=>{
        if(err) throw err;
        cb(doc)
    })
};

module.exports = Auth;
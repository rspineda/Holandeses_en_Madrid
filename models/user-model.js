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

Auth.municipalities = (cb)=>{
    authModel.find({}).exec((err, docs)=>{
        if(err) throw err;
        cb(docs);
    });
}

module.exports = Auth;
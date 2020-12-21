const authModel = require('./user-schema');
const { MongooseDocument } = require('mongoose');



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
    
    authModel.aggregate([
        {$group:{_id: "$municipality", total: {$sum:1} }}   
    ]).exec((err,docs)=>{
        if(err) throw err;
        cb(docs)
    })

    //sacando los usurios y su municipio:
    //authModel.find({}).exec((err, docs)=>{
        //if(err) throw err;
        //cb(docs);
    //});

    //probando la longitud de rivas:
    //authModel.find({ "municipality": "Rivas-Vaciamadrid" }).exec((err,doc)=>{
        //if(err) throw err;
        //console.log("el resultado de la query: ", doc);
        //console.log("numero de repeticiones", doc.length);
    //})
}

Auth.findUser = (user,cb)=>{
    authModel.findOne({
        email: user.email       
    }).exec((err, dbUser)=>{
        if(err) throw err;
        if(!dbUser) {
            let result = "Usuario no encontrado";
            let authenticated = false;
            //console.log("Usuario no encontrado");
            cb(result, authenticated);
        }else if(dbUser){
            if(dbUser.password != user.password){
                let result = "Contraseña incorrecta";
                let authenticated = false
                //console.log("Contraseña incorrecta");
                cb(result,authenticated);
            }else{
                let authenticated = true;
                let result = "Usuario y contraseña correcta";
                //console.log("Usuario y contraseña conrrecta");
                cb(result, authenticated, dbUser);
            }
        }
    })
}

module.exports = Auth;
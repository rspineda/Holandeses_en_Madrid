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
    const municipios = ["Alcalá de Henares","Alcobendas","Alcorcón","Aldea del Fresno","Algete","Alpedrete","Aranjuez","Arganda del Rey","Arroyomolinos","Boadilla del Monte",
                        "Brunete","Buitrago de Lozoya","Cenicientos","Cercedilla","Ciempozuelos","Collado Villalba","Colmenar Viejo","Coslada","El Escorial","El Molar","Fuenlabrada",
                        "Fuente el Saz de Jarama","Galapagar","Getafe","Griñón","Guadalix de la Sierra","Guadarrama","Hoyo de Manzanares","Humanes","Las Rozas","Leganés","Madrid","Rivas-Vaciamadrid",]
    municipios.forEach((element)=>{
        console.log(element);
        authModel.find({ 'municipality' : `${element}`}).exec((err,doc)=>{
            if(err) throw err;
            else if(doc.length > 0){
                console.log(`numero de repeticiones de ${element}:`, doc.length);
            }
            
        })
    })

    authModel.find({}).exec((err, docs)=>{
        if(err) throw err;
        cb(docs);
    });
    //authModel.find({ "municipality": "Rivas-Vaciamadrid" }).exec((err,doc)=>{
        //if(err) throw err;
        //console.log("el resultado de la query: ", doc);
        //console.log("numero de repeticiones", doc.length);
    //})
}

module.exports = Auth;
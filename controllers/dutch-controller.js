const Controller = ()=>{

};

Controller.home = (req, res, next)=>{
    let locals = {
        title: "Holandeses en Madrid"
    }
    res.render('index', locals);
}

Controller.shops = (req, res, next)=>{
    let locals = {
        title: "Tiendas holandesas en Madrid"
    }
    res.render('shops', locals);
}

Controller.education = (req, res, nex)=>{
    let locals = {
        title: "Educación holandesa en Madrid"
    }
    res.render('education', locals);
}

Controller.documents = (req, res, nex)=>{
    let locals = {
        title: "Documentación española en Madrid"
    }
    res.render('documents', locals);
}

Controller.secondHand = (req, res, nex)=>{
    let locals = {
        title: "Tiendas de segunda mano en Madrid"
    }
    res.render('second-hand', locals);
}

Controller.cityTrip = (req, res, nex)=>{
    let locals = {
        title: "City-trip en Madrid"
    }
    res.render('city-trip', locals);
}

Controller.goingOut = (req, res, nex)=>{
    let locals = {
        title: "Going-out en Madrid"
    }
    res.render('going-out', locals);
}



module.exports = Controller;


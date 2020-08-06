const Controller = ()=>{

};

Controller.home = (req, res, next)=>{
    let locals = {
        title: "Holandeses en Madrid"
    }
    res.render('index', locals);
}

Controller.shops = (req, res, next)=>{
    res.send('aqui irá shops');
}

Controller.education = (req, res, nex)=>{
    res.send('aquí irá education');
}

Controller.documents = (req, res, nex)=>{
    res.send('aquí irá documents');
}

Controller.secondHand = (req, res, nex)=>{
    res.send('aquí irá second-hand');
}

Controller.cityTrip = (req, res, nex)=>{
    res.send('aquí irá cityTrip');
}

Controller.goingOut = (req, res, nex)=>{
    res.send('aquí irá goingOut');
}

Controller.groups = (req, res, nex)=>{
    res.send('aquí se accederá a groups');
}

module.exports = Controller;


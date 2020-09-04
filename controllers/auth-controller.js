const authModel = require('../models/user-model'),
        errors = require('../middlewares/errors');


const ControllerAuth = ()=>{

};

ControllerAuth.groupsLogIn = (req, res, next)=>{
    let locals = {
        title: "Holandeses en las zonas de Madrid (log In)"
    }
    res.render('groups-logIn', locals);
}

ControllerAuth.groupsSignUp = (req, res, next)=>{
    let locals = {
        title: "Holandeses en las zonas de Madrid (Sign Up)"
    }
    res.render('groups-signUp', locals);
}

ControllerAuth.groupsSignUpPost = (req, res, next)=>{
    console.log("todo: ",req.body)
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        municipality: req.body.municipality,
        othermunicipality: req.body.othermunicipality
    }

    console.log('el nuevo usuario registrado: ',user)

    authModel.setUser(user, (doc)=>{
        console.log('logra pasar a mongo!!!');
        res.redirect(`/?message=El usuario ${user.username} ha sido registrado correctamente`);
    });
}

ControllerAuth.municipalities = (req, res, next)=>{

    authModel.municipalities((docs)=>{
        let locals = {
            title: "Municipios de Madrid con holandeses",
            data: docs
        }
        res.render('municipalities', locals);
    });  
}


module.exports = ControllerAuth;
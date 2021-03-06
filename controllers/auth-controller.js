const authModel = require('../models/user-model'),
        //errors = require('../middlewares/auth'),
        jwt = require('jsonwebtoken');


const ControllerAuth = ()=>{

};

ControllerAuth.groupsLogIn = (req, res, next)=>{
    let locals = {
        title: "Holandeses en las zonas de Madrid (log In)"
    }
    res.render('groups-logIn', locals);
}


ControllerAuth.groupsLogInPost = (req, res)=>{

    console.log("entran así los datos del cliente: ", req.body);

    const user = {
        email: req.body.email,
        password: req.body.password
    }

    authModel.findUser(user, (result, authenticated, dbUser)=>{
        const message = result; 
        const token =  (authenticated == true) ? jwt.sign({dbUser}, req.app.get('secretKey')) : null;
        /*
        res.json({
            status: "peticion procesada",
            result: message,
            token : token
        });
        */
        const authResult = {
             message : message,
             token : token,
             result : "petición procesada"
        }
        res.render('groups-login-ok', authResult)   
    });
}


ControllerAuth.groupsSignUp = (req, res, next)=>{
    let locals = {
        title: "Holandeses en las zonas de Madrid (Sign Up)"
    }
    res.render('groups-signUp', locals);
}

ControllerAuth.groupsSignUpPost = (req, res, next)=>{
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
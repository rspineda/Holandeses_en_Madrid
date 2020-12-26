document.getElementById("seeMaps").addEventListener('click', ()=>{
    let token = document.getElementById('token').value;
    //console.log('el token que voy guardar es:', token);

    localStorage.setItem(jwt, JSON.stringify(token) );

});
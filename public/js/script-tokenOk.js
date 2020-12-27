document.getElementById("seeMaps").addEventListener('click', ()=>{
    const token =  document.getElementById('suToken').value;
    console.log('el token que voy guardar es:', token);

    localStorage.setItem('jwt', token );

});
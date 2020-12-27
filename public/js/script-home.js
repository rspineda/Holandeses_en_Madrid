const token = ()=>{
    if(localStorage.getItem('jwt') ){
        document.getElementById('token').setAttribute('value', localStorage.getItem('jwt'));
    }else{
        document.getElementById('token').setAttribute('value', 'null')
    }
}

token();

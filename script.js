const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const error = document.querySelector('#error');

const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i


function validateEmail(){
    if(!(regx.test(email.value))){
        error.innerHTML = 'Check your email please';
        email.style.outlineColor = 'red';
        return false;
    }
    else{
        error.innerHTML = '';
        email.style.outlineColor = '';
        return true;
    }
}




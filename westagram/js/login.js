const loginButton = document.querySelector('#login-button');
const bothInputWritten = document.querySelector(".input-container")

bothInputWritten.addEventListener('keyup', function(){
    let inputtedId = document.querySelector('.id-input').value;
    let inputtedPw = document.querySelector('.input-password').value;

    if(inputtedId&&inputtedPw){
        loginButton.style.opacity = 1;
    } else{
        loginButton.style.opacity = 0.2;
    }

   /* document.addEventListener("keyup", function() {
        console.log("inputtedId >>>", inputtedId);
        console.log("inputtedPw >>>", inputtedPw);
    })*/

});



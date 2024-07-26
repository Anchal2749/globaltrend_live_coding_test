document.addEventListener("DOMContentLoaded",function (){
    const form = document.getElementById("signup-form");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    function validateEmail(){
        if(emailPattern.test(emailInput.value)){
            emailError.classList.add("hidden");
        }else{
            emailError.classList.remove("hidden");
        }
    }

    function validatePasswordMatch(){
        if(passwordInput.value === confirmPasswordInput.value){
            confirmPasswordError.classList.add("hidden");
        }else{
            confirmPasswordError.classList.remove("hidden");
        }
    }

    function validateForm(event){
        let isValid = true;
        if(nameInput.value.trim() === ""){
            nameError.classList.remove("hidden");
            isValid=false;
        }else{
            nameError.classList.add("hidden");
        }

        if(!emailPattern.test(emailInput.value)){
            emailError.classList.remove("hidden");
            isValid = false;
        }else{
            emailError.classList.add("hidden");
        }

        if(passwordInput.value.trim()===""){
            passwordError.classList.remove("hidden");
            isValid = false;
        }else{
            passwordError.classList.add("hidden");
        }

        if(passwordInput.value !== confirmPasswordInput.value){
            confirmPasswordError.classList.remove("hidden");
            isValid=false;
        }else{
            confirmPasswordError.classList.add("hidden");
        }

        if(!isValid){
            event.preventDefault();
        }
    }

     emailInput.addEventListener("input",validateEmail);
     passwordInput.addEventListener("input",validatePasswordMatch);
     confirmPasswordInput.addEventListener("input",validatePasswordMatch);
     form.addEventListener("submit",validateForm);
})
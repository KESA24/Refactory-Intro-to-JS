//We can access elements in the form using the form itself

//Login Form

const formAccess = () =>{
    const userName = document.userLoginForm.userName;
    const userPassword = document.userLoginForm.password;
    userName.focus();
}

//Signup Form Access
const signupFormAccess = () => {

    const signupName = document.signupForm.userName;
    const  signupEmail = document.signupForm.email;
    const signupPassword = document.signupForm.password;
    const userPhone =  documet.signupForm.phone;

//Validation of elements
    let userNameStandard = /^[A-Za-z]+$/; //Validates text input field

    if (signupName.value.match(userNameStandard)){
        console.log(signupName.value);
        alert("Right Input");
        signupName.style.border = "2px solid green";
    }
    else {
        alert("Please provide a valid username");
        signupName.style.border = "2px solid red"
    }

}
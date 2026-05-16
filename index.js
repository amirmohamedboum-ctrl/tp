const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputAge = document.getElementById("age");
const submitBtn = document.getElementById("submitbtn");

console.log(inputName);
console.log(inputEmail);
console.log(inputPassword);
console.log(inputAge);
console.log(submitBtn);

function signup(event) {  
    event.preventDefault();
    console.log("button clicked!");
    console.log("Name: " + inputName.value);
    console.log("Email: " + inputEmail.value);
    console.log("Password: " + inputPassword.value);
    console.log("Age: " + inputAge.value);


    alert("Name: " + inputName.value + "\nEmail: " + inputEmail.value + "\nPassword: " + inputPassword.value + "\nAge: " + inputAge.value);
}

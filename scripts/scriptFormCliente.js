let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let address = document.getElementById("address");
let password = document.getElementById("password");
let invia = document.getElementById("submit");
let form = document.getElementById("myform");



form.addEventListener("submit", function (evt) {

    evt.preventDefault();
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(address.value);
    console.log(password.value);


    //console.log(firstname);
    let jeson = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        addess: address.value,
        password: password.value,
    };

    console.log(jeson)
    //nostre
});
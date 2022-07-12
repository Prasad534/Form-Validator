console.log("hi");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validuser = false;
let validemail = false;
let validphone = false;

$("#success").hide();
$("#fail").hide();

// console.log(name, email, phone);

name.addEventListener("blur", ()=>{
    console.log("name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your name is valid");
        name.classList.remove("is-invalid");
        validuser = true;
    }
    else{
        console.log("Your name is not valid");
        name.classList.add("is-invalid");
        validuser = false;
    }
})
email.addEventListener("blur", ()=>{
    console.log("email is blurred");
    //validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
        validemail = true;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add("is-invalid");
        validemail = false;
    }
})
phone.addEventListener("blur", ()=>{
    console.log("phone is blurred");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
        validphone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add("is-invalid");
        validphone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e)=>{
    console.log("you clicked submit");
    e.preventDefault();

if(validuser && validemail && validphone){
    let fail = document.getElementById("fail");
    console.log("valid phone name email");
    let success = document.getElementById("success");
    success.classList.add("show");
    // fail.classList.remove("show");
    // $("#fail").alert("close");
    $("#fail").hide();
    $("#success").show();
}
else{
    console.log("wrong entry");
    let fail = document.getElementById("fail");
    fail.classList.add("show");
    // success.classList.remove("show");
    $("#success").hide();
    $("#fail").show();
}

});
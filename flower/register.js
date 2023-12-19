const username=document.getElementById('Username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const ConformPassword=document.getElementById('ConformPassword');


const usernamePattern=/^[a-zA-Z0-9_-]{3,16}$/;
const  usernameInput=document.querySelector('.Username')

let a = 0;
usernameInput.addEventListener("input",()=>{

    const usernamePattern=/^[a-zA-Z0-9_-]{3,16}$/;
    const usernameInput=document.querySelector('.Username').value
    const ptag=document.querySelector('#Username');
if(usernamePattern.test(usernameInput)){
    ptag.textContent="valid Username"
    ptag.style.color="green"
    a = 1;
}else{
    ptag.textContent="Invalid Username"
    ptag.style.color="red"
    a = 0;
}
})


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailInput=document.querySelector('.email')

let b = 0;
emailInput.addEventListener("input",()=>{

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput=document.querySelector('.email').value
    const ptag=document.querySelector('#email');
if(emailPattern.test(emailInput)){
    ptag.textContent="valid email"
    ptag.style.color="green"
    b = 1;
}else{
    ptag.textContent="Invalid email"
    ptag.style.color="red"
    b = 0;
}
})

document.getElementsByTagName("button")[0].addEventListener('click', (e) => {
    e.preventDefault();
    if(b == 1 && a == 1){
        window.location.replace("login.html");
        console.log("inside if")
    }
    else{
        console.log("inside else");
        alert("Invalid Username")
    }
})


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const passwordInput=document.querySelector('.password')

let c = 0;
passwordInput.addEventListener("input",()=>{

    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordInput=document.querySelector('.password').value                   //Valid password: P@ssw0rd
    const ptag=document.querySelector('#password');
if(passwordPattern.test(passwordInput)){
    ptag.textContent="valid password"
    ptag.style.color="green"
    c = 1;
}else{
    ptag.textContent="Invalid password"
    ptag.style.color="red"
    c = 0;
}
})

document.getElementsByTagName("button")[0].addEventListener('click', (e) => {
    e.preventDefault();
    if(c == 1 && b == 1 && a == 1){
        window.location.replace("login.html");
        console.log("inside if")
    }
    else{
        console.log("inside else");
        alert("Invalid Username")
    }
})
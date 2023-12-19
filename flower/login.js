const email=document.getElementById('email');
const password=document.getElementById('password');

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
        window.location.replace("Index.html");
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
    if(c == 1 && b == 1){
        window.location.replace("Index.html");
        alert("Thank for visiting our Page")
    }
    else{
        console.log("inside else");
        alert("Invalid Username")
    }
})
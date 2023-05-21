const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("USERNAME_KEY", userName);
    console.log(userName);
    paintGreetings(userName);
}

function handleLinkClick(event){
    event.preventDefault();
}




loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUserName = localStorage.getItem("USERNAME_KEY");

if (savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}
 
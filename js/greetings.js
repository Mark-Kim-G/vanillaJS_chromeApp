const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName)
  paintGreetings(userName);
}

function paintGreetings(userName){
  greetings.innerText = `Hello ${userName}`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else {
  paintGreetings(savedUserName);
}


// if (userName === ""){
//   alert("Please input your name");
// }else if (userName.length>15){
//   alert("Your name is too long.");
// }


// const userInput = document.querySelector("#number");
// const userGuess = document.querySelector("#guess");
// const submitForm = document.querySelector("#submitForm");
// const result = document.querySelector("#result");

// function handlePlayBtn(event) {
//   const value = parseInt(userInput.value, 10);
//   const guessNum = parseInt(userGuess.value, 10);
//   const randomNumber = Math.ceil(Math.random() * value);
//   event.preventDefault();

//   if (guessNum !== randomNumber) {
//     result.innerHTML =
//       "You chose: " +
//       guessNum +
//       ", the machine chose: " +
//       randomNumber +
//       ". <br><strong>You lost!</strong>";
//   } else {
//     result.innerHTML =
//       "You chose: " +
//       guessNum +
//       ", the machine chose: " +
//       randomNumber +
//       ". <br><strong>You Won!</strong>";
//   }
// }

// submitForm.addEventListener("submit", handlePlayBtn);

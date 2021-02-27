//SELECTORS

const loginInput = document.querySelector("#username-input");
const loginButton = document.querySelector("#login-btn");
const invalidLogin = document.querySelector(".invalid-login");
invalidLogin.hidden = true;
const nameInput = document.querySelector("#login");
const nameButton = document.querySelector("#start-button");
nameInput.hidden = true;
nameButton.hidden = true;
const playerName = document.querySelector("#player-name");

//EVENT LISTENERS

function loginUser() {
  if (loginInput.value === "") {
    invalidLogin.hidden = false;
    return;
  }
  loginInput.hidden = true;
  loginButton.hidden = true;
  invalidLogin.hidden = true;
  nameInput.hidden = false;
  nameButton.hidden = false;
}

nameButton.addEventListener("click", () => {
  if (nameInput.value === "") {
    invalidLogin.hidden = false;
    return;
  }
  nameInput.hidden = true;
  nameButton.hidden = true;
  playerName.innerText = `Your name:${nameInput.value}`;
});

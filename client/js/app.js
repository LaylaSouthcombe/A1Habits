const emailInput = document.querySelector("#form-email-input");
const emailLabel = document.querySelector(".form-email-label");
const passwordInput = document.querySelector("#form-password-input");
const passwordLabel = document.querySelector(".form-password-label");

const nameInput = document.querySelector("#form-name-input-signup");
const nameLabel = document.querySelector(".form-name-label-signup");
const emailInputSignup = document.querySelector("#form-email-input-signup");
const emailLabelSignup = document.querySelector(".form-email-label-signup");
const passwordInputSignup = document.querySelector(
  "#form-password-input-signup"
);
const passwordLabelSignup = document.querySelector(
  ".form-password-label-signup"
);

const regBtn = document.querySelector("#form-reg-btn");
const logBtn = document.querySelector("#form-log-btn");

const modal = document.querySelector(".modal");
const modalLogin = document.querySelector(".modal-login");
const modalSignup = document.querySelector(".modal-signup");

const authBtn = document.querySelector("#auth");
const wrapper = document.querySelector("#wrapper");

toggleLabelShift(emailInput, emailLabel, "move-up");
toggleLabelShift(passwordInput, passwordLabel, "move-up");
toggleLabelShift(nameInput, nameLabel, "move-up");
toggleLabelShift(emailInputSignup, emailLabelSignup, "move-up");
toggleLabelShift(passwordInputSignup, passwordLabelSignup, "move-up");

function toggleLabelShift(input, label, classRef) {
  input.addEventListener("input", () => {
    // console.log(emailInput.value);
    if (input.value) {
      label.classList.add(classRef);
    } else {
      label.classList.remove(classRef);
    }
  });
}

regBtn.addEventListener("click", () => {
  modalSignup.classList.add("rotate-signup");
  modalLogin.classList.add("rotate-login");
});

logBtn.addEventListener("click", () => {
  modalSignup.classList.remove("rotate-signup");
  modalLogin.classList.remove("rotate-login");
});

authBtn.addEventListener("click", () => {
  if (modal.classList.contains("disabled")) {
    modal.classList.remove("disabled");
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("disabled");
  }
});

// ------------ selection actions ------------------- //

const section1 = document.querySelector(".section1");
const sel1 = document.querySelector("#selection-1");
const sel2 = document.querySelector("#selection-2");
const sel3 = document.querySelector("#selection-3");
const sel4 = document.querySelector("#selection-4");
sel1.addEventListener("click", () => {
  section1.innerHTML = "list of Cards with smoking related data ";
});

sel2.addEventListener("click", () => {
  section1.innerHTML = "list of Cards with water related data ";
});

sel3.addEventListener("click", () => {
  section1.innerHTML = "list of Cards with sleeping related data ";
});

sel4.addEventListener("click", () => {
  section1.innerHTML = "charts with weekly and monthly charts and money saved";
});
const tombolLogin = document.getElementById("sign-in");
const tombolDaftar = document.getElementById("sign-up");
const infoLogin = document.getElementById("info-sign-in");
const formDaftar = document.getElementById("form-daftar");

tombolDaftar.addEventListener("click", () => {
  infoLogin.classList.add("info-login-gerak");
  formDaftar.classList.add("form-daftar-gerak");
});

tombolLogin.addEventListener("click", () => {
  infoLogin.classList.remove("info-login-gerak");
  formDaftar.classList.remove("form-daftar-gerak");
});

const inputPw = document.getElementById("password");
const checkBox = document.getElementById("check");

checkBox.addEventListener("input", (e) => {
  if (e.target.checked) {
    inputPw.setAttribute("type", "text");
  } else {
    inputPw.setAttribute("type", "password");
  }
});

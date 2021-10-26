import { login, logout } from "./auth.js";
const buttonLogin = document.getElementById("button-login");

buttonLogin.addEventListener("click", async (e) => {
    try {
      await login();
      
    } catch (error) {
      console.error(error);
    }
  });
import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const formSection = document.getElementById("formSection");

  if (!signupBtn || !loginBtn || !formSection) {
    console.error("Required DOM elements not found.");
    return;
  }

  const signupForm = `
    <input type="text" id="fullName" placeholder="Full Name">
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    <button id="submitSignup" class="toggle-btn" style="margin-top:10px;">Sign Up</button>
  `;

  const loginForm = `
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    <button id="submitLogin" class="toggle-btn" style="margin-top:10px;">Login</button>
  `;

  function showForm(type) {
    if (type === 'signup') {
      formSection.innerHTML = signupForm;
      signupBtn.classList.add('active');
      loginBtn.classList.remove('active');
    } else {
      formSection.innerHTML = loginForm;
      signupBtn.classList.remove('active');
      loginBtn.classList.add('active');
    }
  }

  signupBtn.addEventListener('click', () => showForm('signup'));
  loginBtn.addEventListener('click', () => showForm('login'));

  document.addEventListener('click', (event) => {
    if (event.target.id === 'submitSignup') {
      console.log("Sign-up button clicked");

      // Get user input
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Input validation
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      // Firebase sign-up logic
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("User signed up:", userCredential.user);
          alert("Sign-up successful! Welcome!");
        })
        .catch((error) => {
          console.error("Error during sign-up:", error.message);
          alert(`Sign-up failed: ${error.message}`);
        });
    } else if (event.target.id === 'submitLogin') {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Input validation
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Firebase login logic
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("User logged in:", userCredential.user);
          alert("Login successful! Welcome back!");
        })
        .catch((error) => {
          console.error("Error during login:", error.message);
          alert(`Login failed: ${error.message}`);
        });
    }
  });
});

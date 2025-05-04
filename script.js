const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const formSection = document.getElementById("formSection");

const signupForm = `
  <input type="text" placeholder="Full Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button class="toggle-btn" style="margin-top:10px;">Sign Up</button>
`;

const loginForm = `
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button class="toggle-btn" style="margin-top:10px;">Login</button>
`;

function showForm(type) {
  if (type === 'signup') {
    formSection.innerHTML = signupForm;
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
  } else {
    formSection.innerHTML = loginForm;
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
  }
}

signupBtn.addEventListener("click", () => showForm('signup'));
loginBtn.addEventListener("click", () => showForm('login'));

// Initial load
showForm('signup');

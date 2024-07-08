// Event listener that waits for the DOM to be fully loaded before executing the code inside
document.addEventListener('DOMContentLoaded', () => {
  // Select various elements from the HTML using class names and store them in constants
  const form = document.querySelector('.form-registration');
  const firstNameInput = document.querySelector('.fname-input');
  const lastNameInput = document.querySelector('.lname-input');
  const usernameInput = document.querySelector('.username-input');
  const emailInput = document.querySelector('.email-input');
  const passwordInput = document.querySelector('.password-input');
  const confirmPasswordInput = document.querySelector(
    '.confirm-password-input'
  );
  const submitBtn = document.querySelector('.submit-btn');
});

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

  // Function to check if the password meets the requirements and if the confirm password matches
  const validatePassword = () => {
    // Get the current values of the password and confirm password inputs
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if the password is less than 8 characters. If true, add the 'invalid' class to the password input. If false, remove the 'invalid' class
    if (password.length < 8) {
      passwordInput.classList.add('invalid');
    } else {
      passwordInput.classList.remove('invalid');
    }

    // Checks if the password and confirm password match. If false, add the 'invalid' class to the confirm password input. If ttrue, remove the 'invalid' class.
    if (password !== confirmPassword) {
      confirmPasswordInput.classList.add('invalid');
    } else {
      confirmPasswordInput.classList.remove('invalid');
    }

    submitBtn.disabled = password.length < 8 || password !== confirmPassword;
  };
});

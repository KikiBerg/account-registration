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

    // Disable submit button if he password is less than 8 characters OR if the password and confirm password don't match.
    submitBtn.disabled = password.length < 8 || password !== confirmPassword;
  };

  // Event listeners whenever the user types in the password and confirm password fields. Call the validatePassword function
  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validatePassword);

  // Add an event listener to the form for the submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior, which would refresh the page

    // Create an object with the user's input data
    const registrationData = {
      fname: firstNameInput.value,
      lname: lastNameInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Log the reg data to the console and display it in an alert
    console.log(registrationData);
    alert(JSON.stringify(registrationData, null, 2)); // convert the object to a formatted string for the alert
  });
});

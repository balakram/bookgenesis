var modal = document.getElementById("myModal");
var errorMessage = document.getElementById('error-message');

// Function to show the modal
function showModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to verify the code
function verifyCode() {
  var code = document.getElementById('code').value;

  if (code === '01012001') { // Correct verification code
    window.location.href = 'main-page.html'; // Redirect to the main page
  } else {
    errorMessage.textContent = 'Incorrect verification code. Please try again.';
    errorMessage.style.display = 'block'; // Show error message
  }
}

// Function to handle the "Get Code" action
function getCode() {
  var code = document.getElementById('code').value;

  if (code === '1111') { // Correct code to trigger the "Get Code" action
    window.location.href = 'main-page.html'; // Redirect to the main page
  } else {
    errorMessage.textContent = 'Request to access and Verification Code sent to your email.';
    errorMessage.style.display = 'block'; // Show error message
  }
}

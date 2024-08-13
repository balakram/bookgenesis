document.getElementById('code').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    verifyCode();
  }
});

function verifyCode() {
  var codeInput = document.getElementById('code');
  var code = codeInput.value.trim();
  var errorMessage = document.getElementById('error-message');

  // Reset styles and messages
  errorMessage.textContent = '';
  codeInput.style.borderColor = '';

  // Validation for 8-digit code
  if (code.length !== 8 || isNaN(code)) {
    errorMessage.textContent = 'Please enter a valid 8-digit verification code.';
    codeInput.style.borderColor = 'red';
    return;
  }

  // Verification logic
  if (code === '01012001') { // Correct verification code
    localStorage.setItem('isVerified', btoa('verified')); // Store a simple obfuscated verification flag
    window.location.href = 'main-page.html'; // Redirect to the main page
  } else {
    errorMessage.textContent = 'Incorrect verification code. Please try again.';
    codeInput.style.borderColor = 'red';
  }
}

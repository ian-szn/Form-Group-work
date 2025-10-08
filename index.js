
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const successMessage = document.getElementById('successMessage');
  
  // Form validation
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const validationMessage = document.getElementById(field.id + 'Validation');
      
      if (!field.value.trim()) {
        isValid = false;
        if (validationMessage) {
          validationMessage.style.display = 'block';
        }
        field.style.borderColor = '#e74c3c';
      } else {
        if (validationMessage) {
          validationMessage.style.display = 'none';
        }
        field.style.borderColor = '#2ecc71';
      }
    });
    
    // Validate email format
    const emailField = document.getElementById('email');
    const emailValidation = document.getElementById('emailValidation');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailField.value && !emailRegex.test(emailField.value)) {
      isValid = false;
      emailValidation.textContent = 'Please enter a valid email address';
      emailValidation.style.display = 'block';
      emailField.style.borderColor = '#e74c3c';
    }
    
    if (isValid) {
      // In a real application, you would send the form data to a server here
      // For demonstration, we'll just show a success message
      form.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Reset form after 5 seconds
      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Reset validation styles
        const allFields = form.querySelectorAll('input, select, textarea');
        allFields.forEach(field => {
          field.style.borderColor = '';
          const validationMessage = document.getElementById(field.id + 'Validation');
          if (validationMessage) {
            validationMessage.style.display = 'none';
          }
        });
      }, 5000);
    }
  });
  
  // Real-time validation for required fields
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('input', function() {
      const validationMessage = document.getElementById(this.id + 'Validation');
      
      if (this.value.trim()) {
        if (validationMessage) {
          validationMessage.style.display = 'none';
        }
        this.style.borderColor = '#2ecc71';
      } else {
        if (validationMessage) {
          validationMessage.style.display = 'block';
        }
        this.style.borderColor = '#e74c3c';
      }
    });
  });
  
  // Email format validation on input
  const emailField = document.getElementById('email');
  emailField.addEventListener('input', function() {
    const emailValidation = document.getElementById('emailValidation');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (this.value && !emailRegex.test(this.value)) {
      emailValidation.textContent = 'Please enter a valid email address';
      emailValidation.style.display = 'block';
      this.style.borderColor = '#e74c3c';
    } else if (this.value) {
      emailValidation.style.display = 'none';
      this.style.borderColor = '#2ecc71';
    } else {
      emailValidation.style.display = 'none';
      this.style.borderColor = '';
    }
  });
});

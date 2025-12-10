// Registration form handling
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (confirmRegistration()) {
        // Store form data in localStorage
        storeFormData();
        
        // Open confirmation page
        window.location.href = 'confirm.html';
    }
});

function confirmRegistration() {
    const form = document.getElementById('registrationForm');
    
    // Check if form is valid
    if (!form.checkValidity()) {
        alert('Please fill in all required fields correctly.');
        return false;
    }
    
    return true;
}

function storeFormData() {
    // Get form values
    const formData = {
        firstname: document.getElementById('fname').value,
        lastname: document.getElementById('lname').value,
        studentid: document.getElementById('studentId').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        major: document.getElementById('major').value,
        year: document.getElementById('year').value,
        experience: document.getElementById('experience').value,
        goals: document.getElementById('goals').value,
        interests: getSelectedInterests()
    };
    
    // Store in localStorage
    localStorage.setItem('registrationData', JSON.stringify(formData));
}

function getSelectedInterests() {
    const interests = [];
    const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
    
    checkboxes.forEach(checkbox => {
        interests.push(checkbox.value);
    });
    
    return interests;
}

// Input validation and formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 6) {
        value = value.replace(/(\d{3})(\d{0,3})/, '$1-$2');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
    }
    e.target.value = value;
});

document.getElementById('studentId').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9);
});
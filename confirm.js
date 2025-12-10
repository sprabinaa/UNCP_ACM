function init() {
    // Retrieve data from localStorage
    const formData = JSON.parse(localStorage.getItem('registrationData'));
    
    if (!formData) {
        alert('No registration data found. Please fill out the registration form first.');
        window.location.href = 'register.html';
        return;
    }
    
    // Populate the confirmation table
    document.getElementById('firstNameCell').textContent = formData.firstname || 'Not provided';
    document.getElementById('lastNameCell').textContent = formData.lastname || 'Not provided';
    document.getElementById('studentIdCell').textContent = formData.studentid || 'Not provided';
    document.getElementById('emailCell').textContent = formData.email || 'Not provided';
    document.getElementById('phoneCell').textContent = formData.phone || 'Not provided';
    document.getElementById('majorCell').textContent = formatMajor(formData.major) || 'Not provided';
    document.getElementById('yearCell').textContent = formatYear(formData.year) || 'Not provided';
    document.getElementById('interestsCell').textContent = formatInterests(formData.interests) || 'None selected';
    document.getElementById('experienceCell').textContent = formData.experience || 'Not provided';
    document.getElementById('goalsCell').textContent = formData.goals || 'Not provided';
}

function formatMajor(major) {
    const majors = {
        'cs': 'Computer Science',
        'it': 'Information Technology',
        'cyber': 'Cybersecurity',
        'ds': 'Data Science',
        'other': 'Other'
    };
    return majors[major] || major;
}

function formatYear(year) {
    const years = {
        'freshman': 'Freshman',
        'sophomore': 'Sophomore',
        'junior': 'Junior',
        'senior': 'Senior',
        'graduate': 'Graduate'
    };
    return years[year] || year;
}

function formatInterests(interests) {
    if (!interests || interests.length === 0) return 'None selected';
    
    const interestLabels = {
        'ai': 'Artificial Intelligence',
        'web': 'Web Development',
        'mobile': 'Mobile Development',
        'data': 'Data Science'
    };
    
    return interests.map(interest => interestLabels[interest] || interest).join(', ');
}

function submitRegistration() {
    // In a real application, this would send data to a server
    const formData = JSON.parse(localStorage.getItem('registrationData'));
    
    // Simulate server submission
    alert('Registration submitted successfully! Welcome to UNCP-ACM Student Chapter!');
    
    // Clear localStorage
    localStorage.removeItem('registrationData');
    
    // Redirect to home page or success page
    window.location.href = 'index.html';
}

function goBack() {
    // Go back to registration form to edit information
    window.location.href = 'register.html';
}

// Handle page refresh or navigation
window.addEventListener('beforeunload', function() {
    // Optionally clear data if user leaves without confirming
    // localStorage.removeItem('registrationData');
});
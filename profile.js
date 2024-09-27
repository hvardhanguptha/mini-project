document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const college = document.getElementById('college').value;

    // Simulate saving user data
    const userProfile = {
        fullName,
        email,
        phone,
        address,
        college,
    };

    // Save to localStorage or send to server
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    alert('Profile updated successfully!');
});

document.getElementById('changePicBtn').addEventListener('click', function() {
    document.getElementById('uploadImage').click();
});

document.getElementById('uploadImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('profileImage').src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Load profile data from localStorage (if available)
window.onload = function() {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
        document.getElementById('fullName').value = savedProfile.fullName;
        document.getElementById('email').value = savedProfile.email;
        document.getElementById('phone').value = savedProfile.phone;
        document.getElementById('address').value = savedProfile.address;
        document.getElementById('college').value = savedProfile.college;
    }
};
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        alert('Username already exists!');
    } else {
        users[username] = { email, password };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        window.location.href = '.html';  // Redirect to login page
    }
});
// Registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('reg-email').value;
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (users[username]) {
        alert('Username already exists!');
    } else {
        users[username] = { email, password };
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page
    }
});
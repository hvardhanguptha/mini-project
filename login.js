
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the username exists and the password matches
    if (users[username] && users[username].password === password) {
        // Set user login state to localStorage or sessionStorage
        localStorage.setItem('loggedIn', 'true'); // or sessionStorage if you prefer session-only login tracking

        // Trigger bike animation on successful login
        triggerBikeAnimation(e);
    } else {
        alert('Invalid username or password');
    }
});

// Function to trigger bike animation
function triggerBikeAnimation(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Select the bike element
    const bike = document.getElementById('bike');

    // Add the 'move' class to start the bike animation
    bike.classList.add('move');

    // Redirect to the home page after the animation completes
    setTimeout(() => {
        window.location.href = "home.html"; // Redirect to home page
    }, 1500); // Delay for the animation to complete
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the username exists and the password matches
    if (users[username] && users[username].password === password) {
        // Trigger bike animation on successful login
        triggerBikeAnimation(e); // Call the animation function
    } else {
        alert('Invalid username or password');
    }
});

// Function to trigger bike animation
function triggerBikeAnimation(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Select the bike element
    const bike = document.getElementById('bike');

    // Add the 'move' class to start the bike animation
    bike.classList.add('move');

    // Redirect to the home page after the animation completes
    setTimeout(() => {
        window.location.href = "home.html"; // Redirect to home page
    }, 1500); // Delay for the animation to complete
}
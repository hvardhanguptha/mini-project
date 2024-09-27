function setRole(role) {
    // Store the selected role in local storage or session storage
    localStorage.setItem('userRole', role);
    
    // Redirect to the appropriate page based on the selected role
    if (role === 'rider') {
        window.location.href = 'rider.html'; // Replace with your actual rider page URL
    } else if (role === 'traveller') {
        window.location.href = 'traveller.html'; // Replace with your actual traveller page URL
    }
}
function toggleMenu() {
    var menuOptions = document.getElementById("menu-options");
    if (menuOptions.style.display === "none") {
        menuOptions.style.display = "block";
    } else {
        menuOptions.style.display = "none";
    }
}

function logout() {
    alert("Logged out!");
    // Clear local storage or session storage
    localStorage.clear();
    
    // Redirect to the login page
    window.location.href = 'login.html'; // Replace with your actual login page URL
}
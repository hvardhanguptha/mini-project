document.getElementById('searchButton').addEventListener('click', function() {
    const college = document.getElementById('collegeSearch').value;

    if (college) {
        // Fetch the list of riders based on the selected college and nearby colleges (within 1km radius)
        fetchNearbyRiders(college);
    } else {
        alert("Please enter a college name.");
    }
});

function fetchNearbyRiders(college) {
    // Simulate fetching nearby riders within a 1km radius
    const riders = [
        { name: 'John Doe', college: 'ABC University', distance: 0.5 },
        { name: 'Jane Smith', college: 'XYZ College', distance: 0.8 },
        { name: 'Mike Johnson', college: 'ABC University', distance: 1.0 },
    ];

    const matchingRiders = riders.filter(rider => rider.distance <= 1);

    const riderList = document.getElementById('riderList');
    riderList.innerHTML = '';

    matchingRiders.forEach(rider => {
        const listItem = document.createElement('li');
        listItem.textContent = `${rider.name} - ${rider.college} (${rider.distance} km away)`;
        riderList.appendChild(listItem);
    });

    document.getElementById('matchingRiders').style.display = 'block';
}
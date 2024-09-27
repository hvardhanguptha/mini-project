document.getElementById('searchButton').addEventListener('click', function() {
    const college = document.getElementById('collegeSearch').value;

    if (college) {
        // Fetch the list of travellers based on the selected college and nearby colleges (within 1km radius)
        fetchNearbyTravellers(college);
    } else {
        alert("Please enter a college name.");
    }
});

function fetchNearbyTravellers(college) {
    // Simulate fetching nearby travellers within a 1km radius
    const travellers = [
        { name: 'Sarah Williams', college: 'ABC University', distance: 0.5 },
        { name: 'Alex Brown', college: 'XYZ College', distance: 0.9 },
        { name: 'Chris Evans', college: 'ABC University', distance: 1.0 },
    ];

    const matchingTravellers = travellers.filter(traveller => traveller.distance <= 1);

    const travellerList = document.getElementById('travellerList');
    travellerList.innerHTML = '';

    matchingTravellers.forEach(traveller => {
        const listItem = document.createElement('li');
        listItem.textContent = `${traveller.name} - ${traveller.college} (${traveller.distance} km away)`;
        travellerList.appendChild(listItem);
    });

    document.getElementById('matchingTravellers').style.display = 'block';
}
document.getElementById('scream-button').addEventListener('click', function() {
    const sound = document.getElementById('scream-sound').value;
    document.getElementById('scream-button').style.color = 'red';
    if (sound === 'male') {
        alert("Male Voice Scream Activated!");
        // Add audio playback functionality here
    } else if (sound === 'siren') {
        alert("Police Siren Activated!");
        // Add audio playback functionality here
    }
});

document.getElementById('fake-call-button').addEventListener('click', function() {
    const name = document.getElementById('fake-call-name').value;
    const timer = document.getElementById('fake-call-timer').value;

    setTimeout(() => {
        alert(`Fake call from ${name}`);
    }, timer * 1000);
});

document.getElementById('send-location-button').addEventListener('click', function() {
    alert("Location request sent to friends.");
    // Implement location sharing functionality here
});

document.getElementById('track-me-button').addEventListener('click', function() {
    alert("Tracking request sent.");
    // Implement tracking functionality here
});

document.getElementById('add-friend-button').addEventListener('click', function() {
    const friendName = document.getElementById('friend-name').value;
    const li = document.createElement('li');
    li.textContent = friendName;
    document.getElementById('friend-list').appendChild(li);
    document.getElementById('friend-name').value = '';
});

document.getElementById('emergency-button').addEventListener('click', function() {
    alert("Emergency SOS sent!");
    // Implement SOS functionality here
});

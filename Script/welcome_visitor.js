// JavaScript to toggle the visibility of the popup
function closePopup() {
    document.getElementById('overlay').classList.remove('active');
}

// Show the popup after 3 seconds
setTimeout(function() {
    document.getElementById('overlay').classList.add('active');
}, 3000);
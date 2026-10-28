// Display the travel-video message when the video starts loading.
function videoFunction() {
    document.getElementById("myComment").innerHTML = "A great vacation video.";
}

// Show guidance while the mouse is over the email label.
function emailMessage() {
    document.getElementById("emailBox").innerHTML = "Please enter a valid email address";
}

// Restore the label when the mouse leaves.
function blankMessage() {
    document.getElementById("emailBox").innerHTML = "Email:";
}

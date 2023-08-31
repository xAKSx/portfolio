document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the notification element
    var notification = document.getElementById("notification");
    
    // Display the notification
    notification.style.display = "block";
    
    // Refresh the page when the notification is clicked
    notification.addEventListener("click", function() {
        location.reload();
    });
});

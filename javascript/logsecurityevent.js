function logSecurityEvent(event) {
    console.log(`Security Event: ${event}`);
}

// Example usage
document.addEventListener("click", function() {
    logSecurityEvent("User clicked on the page.");
});


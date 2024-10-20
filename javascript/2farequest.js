function send2FACode(userPhone) {
    // Simulate sending a 2FA code
    const code = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit code
    console.log(`Sending 2FA code ${code} to ${userPhone}`);
}

// Example usage
send2FACode("+1234567890");


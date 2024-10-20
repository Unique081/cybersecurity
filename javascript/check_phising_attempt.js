function checkURL(url) {
    const suspiciousDomains = ["malicious.com", "phishing.com"];
    const urlObject = new URL(url);
    if (suspiciousDomains.includes(urlObject.hostname)) {
        alert("Warning: This URL may be suspicious!");
    }
}

// Example usage
checkURL("https://malicious.com");


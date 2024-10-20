const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.setRequestHeader("X-CSRF-Token", "YOUR_CSRF_TOKEN_HERE"); // Include CSRF token
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error("Error fetching data");
    }
};
xhr.send();


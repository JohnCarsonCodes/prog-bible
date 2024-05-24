document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});
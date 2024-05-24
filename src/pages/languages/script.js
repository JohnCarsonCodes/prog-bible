document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/js-subnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('subnav-placeholder').innerHTML = data;
        });
});
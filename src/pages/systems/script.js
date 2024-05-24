document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git-subnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('subnav-placeholder').innerHTML = data;
        });
});
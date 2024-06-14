
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
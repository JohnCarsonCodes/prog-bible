document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/sidebar-bio.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-bio-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/sidebar-fund.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-fund-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
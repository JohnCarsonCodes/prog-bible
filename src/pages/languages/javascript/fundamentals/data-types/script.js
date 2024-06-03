document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/fundamentals/data-types/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-dt-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/fundamentals/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
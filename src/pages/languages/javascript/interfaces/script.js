document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/document-sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/events-sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-events-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
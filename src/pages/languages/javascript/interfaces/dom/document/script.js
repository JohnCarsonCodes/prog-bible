document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/dom/document/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-doc-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/dom/document/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
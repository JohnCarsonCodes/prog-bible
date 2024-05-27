// FOR ARRAY SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/array-sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
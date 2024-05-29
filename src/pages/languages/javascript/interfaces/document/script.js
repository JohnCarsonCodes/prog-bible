document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/document-sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/document/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-doc-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/interfaces/document/instance-methods/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-im-placeholder').innerHTML = data;
        });
});
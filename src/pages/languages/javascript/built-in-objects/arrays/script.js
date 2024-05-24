document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/crumbs-arrays.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-arrays-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/crumbs-instance-methods.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-im-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/crumbs-instance-properties.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-ip-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/crumbs-static-properties.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-sp-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/crumbs-static-methods.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-sm-placeholder').innerHTML = data;
        });
});
// FOR ARRAY SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/arrays/array-sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});

// FOR ABSTRACTION CONTROL SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/abstraction-control/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-ac-placeholder').innerHTML = data;
        });
});

// FOR ERROR OBJECTS SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/error-objects/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-eo-placeholder').innerHTML = data;
        });
});

// FOR FUNCTION PROPERTIES SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/function-properties/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-fp-placeholder').innerHTML = data;
        });
});

// FOR FUNDAMENTAL OBJECTS SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/fundamental-objects/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-fo-placeholder').innerHTML = data;
        });
}); 

// FOR INTERNATIONALIZATION SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/internationalization/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-i-placeholder').innerHTML = data;
        });
});

// FOR KEYED COLLECTIONS SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/keyed-collections/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-kc-placeholder').innerHTML = data;
        });
});

// FOR MEMORY MANAGEMENT SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/memory-management/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-mm-placeholder').innerHTML = data;
        });
});

// FOR NUMBERS/DATES SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/numbers-dates/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-nd-placeholder').innerHTML = data;
        });
});

// FOR REFLECTIONS SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/reflection/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-r-placeholder').innerHTML = data;
        });
});

// FOR STRUCTURED DATA SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/structured-data/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-sd-placeholder').innerHTML = data;
        });
});

// FOR TEXT PROCESSING SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/text-processing/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-tp-placeholder').innerHTML = data;
        });
});

// FOR VALUE PROPERTIES SIDEBAR
document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/value-properties/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-vp-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/languages/javascript/built-in-objects/crumbs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-placeholder').innerHTML = data;
        });
});
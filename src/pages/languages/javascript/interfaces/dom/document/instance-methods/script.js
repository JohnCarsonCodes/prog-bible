document.addEventListener('DOMContentLoaded', function () {
  fetch('/src/pages/languages/javascript/interfaces/dom/document/instance-methods/sidebar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('sidebar-placeholder').innerHTML = data;
    });
});

document.addEventListener('DOMContentLoaded', function () {
  fetch('/src/pages/languages/javascript/interfaces/dom/document/instance-methods/crumbs.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('crumbs-placeholder').innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-commands.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-commands-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-setup.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-setup-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-repo-init.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-repo-init-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-snap.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-snap-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-brench-merge.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-branch-merge-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-remote-repo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-remote-repo-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-inspect-compare.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-inspect-compare-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-changes.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-changes-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-tagging.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-tagging-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-stashing.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-stashing-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/pages/systems/git/commands/crumbs-advanced.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('crumbs-advanced-placeholder').innerHTML = data;
        });
});
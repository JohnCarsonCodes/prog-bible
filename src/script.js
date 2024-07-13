document.addEventListener('DOMContentLoaded', function () {
    fetch('/src/navigation.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('nav-placeholder').innerHTML = data;
      });
  

    function wrapInternalNavs() {
      document.querySelectorAll('.internal-nav').forEach(internalNav => {

        const navContainer = document.createElement('div');
        navContainer.className = 'side-nav-container';
  

        const btnDiv = document.createElement('div');
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.innerHTML = "&lt;"; 
        btnDiv.append(toggleBtn);
  
        internalNav.parentNode.insertBefore(navContainer, internalNav);
        navContainer.appendChild(internalNav);
        navContainer.insertBefore(btnDiv, internalNav);
  

        toggleBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
          toggleBtn.classList.toggle('active');
  
          if (navContainer.classList.contains('active')) {
            toggleBtn.innerHTML = "&gt;";
          } else {
            toggleBtn.innerHTML = "&lt;";
          }
        });
      });
    }
  
    // Call the function to wrap elements
    wrapInternalNavs();
  
    // Adjust the scroll position with an offset
    document.querySelectorAll('.internal-links a').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 15; // Adjust this value as needed
  
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });
      });
    });
  });
  
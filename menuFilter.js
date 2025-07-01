  const tabLinks = document.querySelectorAll('#menu-tabs .nav-link');
  const tabContents = document.querySelectorAll('#menu-content .tab-pane');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all tabs
      tabLinks.forEach(l => l.classList.remove('active', 'show'));
      link.classList.add('active', 'show');

      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.remove('active', 'show');
      });

      // Show the selected tab content
      const targetId = link.getAttribute('data-category');
      const targetContent = document.getElementById(targetId);
      targetContent.classList.add('active', 'show');
    });
  });

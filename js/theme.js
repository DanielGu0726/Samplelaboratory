// Theme Management
(function() {
  'use strict';

  // Get saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Apply theme immediately to prevent flash
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');

    if (!themeBtn) return;

    // Theme toggle handler
    themeBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });
})();

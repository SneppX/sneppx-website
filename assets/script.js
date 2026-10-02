// SneppX Website Interactivity Script

document.addEventListener('DOMContentLoaded', function() {
  initAccordion();
  initTabs();
  initDarkMode();
  initScrollAnimations();
  initMobileMenu();
  initSmoothScroll();
});

/**
 * Accordion functionality for FAQ/expandable sections
 */
function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    if (!header) return;
    
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight;
      
      // Close all other accordions
      const allContents = document.querySelectorAll('.accordion-content');
      allContents.forEach(c => {
        c.style.maxHeight = null;
      });
      
      // Toggle current
      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Tabs functionality for switching between content sections
 */
function initTabs() {
  const tabsContainer = document.querySelector('.tabs');
  if (!tabsContainer) return;
  
  const tabs = tabsContainer.querySelectorAll('.tab');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all panels, show the corresponding one
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      const targetId = this.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
  
  // Activate first tab by default
  if (tabs.length > 0) tabs[0].classList.add('active');
  if (tabPanels.length > 0) tabPanels[0].classList.add('active');
}

/**
 * Dark mode toggle
 */
function initDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const html = document.documentElement;
  
  // Set initial dark mode
  if (prefersDark.matches || localStorage.getItem('dark-mode') === 'enabled') {
    html.classList.add('dark-mode');
  }
  
  // Toggle on click (if a toggle element exists)
  const darkToggle = document.querySelector('.dark-mode-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      html.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', html.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
  }
  
  // Respect system preference changes
  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('dark-mode')) {
      html.classList.toggle('dark-mode', e.matches);
    }
  });
}

/**
 * Scroll animations on element enter
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .card, .post-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/**
 * Mobile menu toggling
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('nav');
  
  if (!menuBtn || !navLinks) return;
  
  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Focus visible states */
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
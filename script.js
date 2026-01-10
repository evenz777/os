// Highlight active tab based on current URL
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Optional: Smooth scroll for internal anchors (if you keep sections on one page)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("open");
    }
  });
});

// Get all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown-menu');
  let timeout;

  // Mouse enters dropdown
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);       // cancel hide timer
    menu.style.maxHeight = menu.scrollHeight + "px"; // show
  });

  // Mouse leaves dropdown
  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      menu.style.maxHeight = "0";  // hide after delay
    }, 200); // delay in milliseconds (0.5s)
  });
});





// FADE-IN ON SCROLL
const faders = document.querySelectorAll('.fade-container');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

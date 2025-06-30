// Simple JavaScript for interactions
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Add click effects to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add a simple click effect
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    });
  });

  // Add hover effect to feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add click handlers for choice buttons
  const choiceButtons = document.querySelectorAll(".btn-choice");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const choice = this.textContent.includes("Human") ? "Human" : "Bot";
      alert(`Вы выбрали: ${choice} Trader! 🎉`);
    });
  });

  // Add click handler for CTA button
  const ctaButton = document.querySelector(".btn-cta");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      alert("Добро пожаловать в TradeBot! 🚀");
    });
  }

  // Add responsive navigation toggle for mobile
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth < 768) {
    // Create mobile menu toggle
    const mobileToggle = document.createElement("button");
    mobileToggle.innerHTML = "☰";
    mobileToggle.className = "mobile-toggle";
    mobileToggle.style.cssText = `
            background: none;
            border: none;
            color: var(--foreground);
            font-size: 1.2rem;
            cursor: pointer;
            display: block;
        `;

    const navRight = document.querySelector(".nav-right");
    navRight.insertBefore(mobileToggle, navRight.firstChild);

    mobileToggle.addEventListener("click", function () {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.right = "0";
        navLinks.style.backgroundColor = "var(--background)";
        navLinks.style.flexDirection = "column";
        navLinks.style.padding = "1rem";
        navLinks.style.borderTop = "2px solid var(--border)";
      }
    });
  }

  // Add animation to elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe feature cards for animation
  featureCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Console welcome message
  console.log(`
    ████████╗██████╗  █████╗ ██████╗ ███████╗██████╗  ██████╗ ████████╗
    ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝
       ██║   ██████╔╝███████║██║  ██║█████╗  ██████╔╝██║   ██║   ██║   
       ██║   ██╔══██╗██╔══██║██║  ██║██╔══╝  ██╔══██╗██║   ██║   ██║   
       ██║   ██║  ██║██║  ██║██████���╝███████╗██████╔╝╚██████╔╝   ██║   
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═════╝  ╚═════╝    ╚═╝   
    
    🤖 Welcome to TradeBot! 
    Ready to trade smarter? Let's go! 🚀
    `);
});

// Active States Logic

const linksContainer = document.getElementById("navLinks");
const links = linksContainer.querySelectorAll("a");
const currentUrl = window.location.href;

links.forEach(link => {
  const linkHref = link.href.replace(/\/$/, "");
  const currentUrlBase = currentUrl.replace(/\/$/, "");

  if (linkHref === currentUrlBase) {
    link.classList.add ("text-admiralnavy-900");
    link.classList.add ("before:w-full");
  } else {
    link.classList.remove ("text-admiralnavy-900");
    link.classList.remove ("before:w-full");
  }
});

// Hamburger menu

const btnMenu = document.getElementById("btnMenu");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarContent = sidebar.querySelector("aside");

btnMenu.addEventListener("click", () => {
    sidebar.classList.remove("opacity-0", "pointer-events-none");
    sidebarContent.classList.remove("-translate-x-full");
    btnMenu.classList.add("hidden");
})

const close = () => {
    sidebar.classList.add("opacity-0", "pointer-events-none");
    sidebarContent.classList.add("-translate-x-full");
    btnMenu.classList.remove("hidden");
}

closeSidebar.addEventListener("click", close);

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !sidebar.classList.contains("pointer-events-none")) close();
}) 

// Stats Section

const statsSection = document.getElementById("statsSection");
const counters = document.querySelectorAll(".counter");
let hasStarted = false;

const startCounting = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const speed = 500;;
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStarted) {
      startCounting();
      hasStarted = true;
  }
});
}, { threshold: 0.5 });

if (statsSection) {
  observer.observe(statsSection);
}
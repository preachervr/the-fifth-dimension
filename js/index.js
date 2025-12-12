// Active States Logic
const linksContainer = document.getElementById("navLinks");
const links = linksContainer.querySelectorAll("a"); 
const currentUrl = window.location.href;

links.forEach(link => {
    const linkHref = link.href.replace(/\/$/, "");
    const currentUrlBase = currentUrl.replace(/\/$/, "");

    if (linkHref === currentUrlBase) {
        link.classList.add("text-midastouch-200");
        link.classList.add("before:w-full");
    } else {
        link.classList.remove("text-midastouch-200");
        link.classList.remove("before:w-full");
    }
});

// Scroll Down 

document.addEventListener("DOMContentLoaded", () => {
    const scrollDownLink = document.getElementById("scroll-down-link");
    if (scrollDownLink) {
        scrollDownLink.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = scrollDownLink.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
})

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
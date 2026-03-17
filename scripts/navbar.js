document.addEventListener("DOMContentLoaded", loadNavbar);

async function loadNavbar() {
  try {

    const response = await fetch("/html/NavBar.html");

    if (!response.ok) throw new Error("Navbar load failed");

    const data = await response.text();

    document.getElementById("navbar-container").innerHTML = data;

    highlightActivePage();

    initMobileMenu();

  } catch (err) {
    console.error(err);
  }
}

function initMobileMenu(){

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("right-top");

  if(!toggle) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

}

function highlightActivePage() {
  const links = document.querySelectorAll(".a-topbar");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) link.classList.add("active");
  });
}


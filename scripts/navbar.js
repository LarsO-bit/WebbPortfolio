document.addEventListener("DOMContentLoaded", loadNavbar);

async function loadNavbar() {
  try {
    const response = await fetch("/html/NavBar.html");

    if (!response.ok) throw new Error("Navbar load failed");

    const data = await response.text();

    document.getElementById("navbar-container").innerHTML = data;

    highlightActivePage();
  } catch (err) {
    console.error(err);
  }
}

function highlightActivePage() {
  const links = document.querySelectorAll(".a-topbar");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) link.classList.add("active");
  });
}
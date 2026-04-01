document.addEventListener("DOMContentLoaded", loadNavbar);

async function loadNavbar() {
  try {
    const response = await fetch("/WebbPortfolio/html/NavBar.html");
    if (!response.ok) throw new Error("Navbar load failed");

    const data = await response.text();
    document.getElementById("navbar-container").innerHTML = data;

    highlightActivePage();
    initMobileMenu();
    initLanguage();

  } catch (err) {
    console.error(err);
  }
}


/* ---------- MOBILE MENU ---------- */

function initMobileMenu(){

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("right-top");

  if(!toggle) return;

  toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

  });

}


/* ---------- ACTIVE PAGE ---------- */

function highlightActivePage(){

  const links = document.querySelectorAll(".a-topbar");
  const currentPage = window.location.pathname.split("/").pop() || "MainSide.html";

  links.forEach(link => {

    const linkPage = link.getAttribute("href").split("/").pop();

    if(linkPage === currentPage){

      link.classList.add("active");

    }

  });

}


/* ---------- LANGUAGE SYSTEM ---------- */

function initLanguage(){

  const button = document.getElementById("lang-toggle");

  if(!button) return;

  const savedLang = localStorage.getItem("language") || "sv";

  applyLanguage(savedLang);

  button.addEventListener("click", toggleLanguage);

}


function applyLanguage(lang){

  const body = document.body;
  const button = document.getElementById("lang-toggle");
  if(lang === "eng"){
    body.classList.add("eng-active");
    if(button) button.textContent = "SV";
  }
  else{
    body.classList.remove("eng-active");
    if(button) button.textContent = "ENG";
  }

  localStorage.setItem("language", lang);

}


function toggleLanguage(){

  const currentLang = localStorage.getItem("language") || "sv";

  if(currentLang === "sv"){

    applyLanguage("eng");
  }
  else{
    applyLanguage("sv");
  }

}
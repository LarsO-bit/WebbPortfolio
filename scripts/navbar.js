fetch("/html/NavBar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("navbar-container").innerHTML = data;

    highlightActivePage();

});

function highlightActivePage(){

    const links = document.querySelectorAll(".a-topbar");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const linkPage = link.getAttribute("href").split("/").pop();

        if(linkPage === currentPage){
            link.classList.add("active");
        }
    });
}
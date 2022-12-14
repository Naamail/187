//active nav bar function
const activePage = window.location.pathname;
console.log(activePage);

const navlinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});

document.getElementById("categoryFilter").addEventListener("change", function () {
    const selected = this.value;
    const items = document.querySelectorAll(".product-item");
    items.forEach(item => {
        const category = item.getAttribute("data-category");
        if (selected === "all" || selected === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});
        
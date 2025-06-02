// document.getElementById("categoryFilter").addEventListener("change", function () {
//     const selected = this.value;
//     const items = document.querySelectorAll(".product-item");
//     items.forEach(item => {
//         const category = item.getAttribute("data-category");
//         if (selected === "all" || selected === category) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// });
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});
        
   function showDetails(imageSrc, title, description) {
    const imageEl = document.getElementById("detailsImage");
    const titleEl = document.getElementById("detailsTitle");
    const descEl = document.getElementById("detailsDescription");

    imageEl.src = imageSrc;
    imageEl.style.display = "block";
    titleEl.textContent = title;
    descEl.textContent = description;
  }

  // Optional: Show default part on page load
  document.addEventListener("DOMContentLoaded", () => {
    showDetails("Pictures/engine.png", "Engine Parts", "Critical components that power your vehicle.");
  });

//   try

 const subItems = {
    engine: [
      {
        title: "Diesel Engine",
        description: "Durable and fuel-efficient for heavy-duty operations.",
        image: "Pictures/diesel-engine.png"
      },
      {
        title: "Petrol Engine",
        description: "Responsive and widely used in light-duty vehicles.",
        image: "Pictures/petrol-engine.png"
      },
      {
        title: "Electric Motor",
        description: "Quiet and eco-friendly option for modern transport.",
        image: "Pictures/electric-motor.png"
      }
    ]
  };

  function showSubItems(category) {
    const items = subItems[category];
    const container = document.getElementById("subItemContainer");
    container.innerHTML = "";

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "col-md-3 sub-item";
      div.textContent = item.title;
      div.onclick = () => showDetail(item);
      container.appendChild(div);
    });

    document.getElementById("subItemsGrid").style.display = "block";
    document.getElementById("productDetailView").style.display = "none";
  }

  function showDetail(item) {
    document.getElementById("detailTitle").textContent = item.title;
    document.getElementById("detailDescription").textContent = item.description;
    document.getElementById("detailImage").src = item.image;
    document.getElementById("productDetailView").style.display = "flex";
    document.getElementById("productDetailView").scrollIntoView({ behavior: 'smooth' });
  }
  
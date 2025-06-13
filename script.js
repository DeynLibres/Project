document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // showDetails("Pictures/engine.png", "Engine Parts", "Critical components that power your vehicle.");
  // showSubItems("engine"); // This line shows the sub-items on page load
  // const firstEngineItem = subItems["engine"]?.[0];
  // if (firstEngineItem) {
  //   showDetail(firstEngineItem, false);
  // }
  showAllSubItems();
});

const subItems = {
  engine: [
    { title: "Starter Motor", description: "Durable and fuel-efficient for heavy-duty operations.", images: [ "Pictures/starter motor.jpg", "Pictures/.jpg", "Pictures/.jpg"]},
    { title: "Alternator", description: "Responsive and widely used in light-duty vehicles.", images:["Pictures/alternator.jpg", "Pictures/alternator1.jpg", "Pictures/alternator2.jpg"]},
    { title: "Differential", description: "Quiet and eco-friendly option for modern transport.", images: ["Pictures/.jpg", "Pictures/.jpg"]},
    { title: "PTO Pump", description:"", images:["Pictures/PTO.jpg", "Pictures/PTO1.jpg", "Pictures/PTO2.jpg"]}
  ],
  brake: [
    { title: "Brake Chamber", description: "", images: ["Pictures/brake chamber.jpg", "Pictures/brake chamber1.jpg", "Pictures/brake chamber2.jpg"]},
    { title: "Brake Booster", description: "", images: ["Pictures/brake booster.jpg", "Pictures/brake booster1.jpg", "Pictures/brake booster2.jpg"]}
  ],
  steering: [
    { title: "Steering Wheel", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "Gear Shifter with Cable", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  transmission:[
    { title: "Clutch Booster", description: "", images: ["Pictures/clutch booster.jpg", "Pictures/clutch booster1.jpg"]},
    { title: "Winban Motor", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  battery: [
    { title: "Fuel Pump", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "Air Dryer", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  cooling: [
    { title: "Radiator with Intercooler", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "V-Rad", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  condenser: [
    { title: "Air Bag", description: "", images: ["Pictures/a2201.jpg", "Pictures/a220.jpg", "Pictures/a2202.jpg", "Pictures/a2203.jpg", "Pictures/a2501.jpg","Pictures/a250.jpg","Pictures/a2502.jpg","Pictures/a2503.jpg"], sizes: ["220", "250"]},
    { title: "Cowl Air Bag", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  exterior: [
    { title: "Windbreaker", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "I beam", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  interior: [
    { title: "", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  exhaust:[
    { title: "Muffler", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "Coul Motor", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  filter: [
    { title: "Diesel Tank", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "Fuel Tank", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ],
  wheels: [
    { title: "Propeller", description: "", images:["Pictures/propeller.jpg"]},
    { title: "Tires", description: "", images:["Pictures/tires.jpg", "Pictures/tires1.jpg", "Pictures/tires2.jpg"]}
  ],
  equipment: [
    { title: "Hijack", description: "", images: ["Pictures/jack.jpg", "Pictures/jack1.jpg", "Pictures/jack2.jpg", "Pictures/jack3.jpg"]},
    { title: "Forklift", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "excavator", description: "", images: ["Pictures/excavator.jpg", "Pictures/excavator1.jpg", "Pictures/excavator2.jpg"]},
    { title: "crane", description:"", images: ["Pictures/crane.jpg", "Pictures/crane1.jpg", "Pictures/crane2.jpg", "Pictures/crane3.jpg", "Pictures/crane4.jpg"]}
  ],
  accessories: [
    { title: "", description: "", images: ["Pictures/", "Pictures/.jpg"]},
    { title: "", description: "", images: ["Pictures/", "Pictures/.jpg"]}
  ]
};

function showSubItems(category) {
  const items = subItems[category];
  const container = document.getElementById("subItemContainer");
  container.innerHTML = "";

    document.getElementById("allSubItemsGrid").style.display = "none";

  if (!items || items.length === 0) {
    container.innerHTML = "<p>No items found.</p>";
    return;
  }

  const grid = document.createElement("div");
  grid.className = "sub-item-grid";
items.forEach(item => {
    if (!item.title) return;
    const firstImage = item.images?.[0] || "https://via.placeholder.com/180";

    const card = document.createElement("div");
    card.className = "sub-item-card";
    card.innerHTML = `
      <img src="${firstImage}" alt="${item.title}">
      <div class="sub-item-title">${item.title}</div>
    `;
    card.onclick = () => showDetail(item);
    grid.appendChild(card);
  });

  container.appendChild(grid);

  document.getElementById("subItemsGrid").style.display = "block";
  document.getElementById("productDetailView")?.classList?.add("d-none");
}

function showDetail(item) {
  
  const titleContainer = document.getElementById("detailTitle");
    titleContainer.textContent = item.title;

    document.getElementById("detailDescription").textContent = item.description;

    const carouselInner = document.getElementById("carouselInner");
    carouselInner.innerHTML = ""; 

    const images = item.images && item.images.length > 0 ? item.images : ["https://via.placeholder.com/800x400?text=No+Image"];
    images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
    slide.innerHTML = `
      <img src="${img || placeholder}" class="product-modal-img"  alt="Product Image">
    `;
    carouselInner.appendChild(slide);
  });


//   const carousel = document.getElementById("carouselIndicators");

  const dropdownDiv = document.createElement("div");
  if (item.sizes && item.sizes.length > 0) {
  dropdownDiv.className = "dropdown";
  dropdownDiv.innerHTML = `
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      Choose Size
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      ${item.sizes.map(size => `
        <li><a class="dropdown-item size-option" href="#" data-size="${size}">${size}</a></li>
      `).join('')}
    </ul>
  `;
  const header = titleContainer.parentElement
  header.classList.add("d-flex", "align-items-center", "justify-content-between");

  const existingDropdown = header.querySelector(".dropdown");
  if (existingDropdown) existingDropdown.remove();

  header.appendChild(dropdownDiv);

  dropdownDiv.querySelectorAll(".size-option").forEach(option => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedSize = e.target.getAttribute("data-size");
      const filteredImages = item.images.filter(img => img.includes(selectedSize));

      carouselInner.innerHTML = "";

      if (filteredImages.length === 0) {
        filteredImages.push("https://via.placeholder.com/800x400?text=No+Images+for+Selected+Size");
      }

        (filteredImages.length > 0 ? filteredImages : ["https://via.placeholder.com/800x400?text=No+Images+for+Selected+Size"])
        .forEach((img, index) => {
          const slide = document.createElement("div");
          slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
          slide.innerHTML = `<img src="${img}" class="product-modal-img" alt="Product Image">`;
          carouselInner.appendChild(slide);
        });
      });
    });
}
  const modal = new bootstrap.Modal(document.getElementById("productDetailModal"));
  modal.show();
}

  function selectCategory(element, category) {
    document.querySelectorAll('.item-box').forEach(box => box.classList.remove('selected'));
    element.classList.add('selected');
    showSubItems(category);

    document.getElementById("allSubItemsGrid").style.display = "none";
  }

  function handleSubItemSearchKey(event) {
    if (event.key === 'Enter') {
      filterSubItems();
    }
  }

  function filterSubItems() {
  const input = document.getElementById('subItemSearchInput').value.toLowerCase();
  const container = document.getElementById('subItemContainer');
  container.innerHTML = "";

  if (input === "") {
    showSubItems("engine");
    return;
  }

  let matches = [];

  // Search across all categories
  for (const category in subItems) {
    subItems[category].forEach(item => {
      if (item.title && item.title.toLowerCase().includes(input)) {
        matches.push(item);
      }
    });
  }

  if (matches.length === 0) {
    container.innerHTML = "<p>No matching products found.</p>";
  } else {
    matches.forEach(item => {
      const div = document.createElement("div");
      div.className = "col-md-3 sub-item";
      div.textContent = item.title;
      div.onclick = () => showDetail(item);
      container.appendChild(div);
    });
  }
  document.getElementById("subItemsGrid").style.display = "block";
  document.getElementById("productDetailView").classList.add("d-none");
}

function showAllSubItems() {
  const container = document.getElementById("allSubItemsGrid");
  container.innerHTML = "";

  const allItems = [];

  for (const category in subItems) {
    const items = subItems[category];
    if (items && items.length > 0) {
      allItems.push(...items.filter(item => item.title));
    }
  }

  const grid = document.createElement("div");
  grid.className = "sub-item-grid";

  allItems.forEach(item => {
    const firstImage = item.images && item.images.length > 0 ? item.images[0] : "https://via.placeholder.com/180";

    const card = document.createElement("div");
    card.className = "sub-item-card";
    card.innerHTML = `
  <div class="image-wrapper">
    <img src="${firstImage}" alt="${item.title}">
    <div class="hover-title">${item.title}</div>
  </div>
`;
    card.onclick = () => showDetail(item);
    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Hide other views
  document.getElementById("subItemsGrid").style.display = "none";
  document.getElementById("productDetailView").classList.add("d-none");
}




// Show details of a product category
// function showDetails(imageSrc, title, description) {
//   document.getElementById("detailsImage").src = imageSrc;
//   document.getElementById("detailsTitle").textContent = title;
//   document.getElementById("detailsDescription").textContent = description;
//   document.getElementById("detailsImage").style.display = "block";
// }

  // document.getElementById("detailImage").src = item.image;
    // document.getElementById("productDetailView").classList.remove("d-none");

    // function showSubItems(category) {
//     const items = subItems[category];
//     const container = document.getElementById("subItemContainer");
//     container.innerHTML = "";

//     if (!items || items.length === 0) {
//       container.innerHTML = "<p>No items found.</p>";
//       return;
//     }

//     items.forEach(item => {
//       if (!item.title) return;

//       const div = document.createElement("div");
//       div.className = "col-md-3 sub-item";
//       div.textContent = item.title; 
//       div.onclick = () => showDetail(item);
//       container.appendChild(div);
//     });

//     document.getElementById("subItemsGrid").style.display = "block";
//     document.getElementById("productDetailView").classList.add("d-none");

    // if (items[0] && items[0].title) {
    //   showDetail(items[0], false);
    // }
  

  // document.getElementById("productDetailView").classList.remove("d-none");


  

  //   if (scroll) {
  //     document.getElementById("productDetailView").scrollIntoView({ behavior: "smooth" });
  //   }
  // }


const themeToggle = document.getElementById("themeToggle");
const homeBtn = document.getElementById("homeBtn");
const categoryBtn = document.getElementById("categoryBtn");
const filtersSection = document.getElementById("filtersSection");
const gallerySection = document.getElementById("gallerySection");
const filterButtons = document.querySelectorAll(".filter-btn");
const body = document.body;


themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  themeToggle.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
});


homeBtn.addEventListener("click", () => {
  filtersSection.style.display = "none"; // Hide filters
  showAllImages();
});

categoryBtn.addEventListener("click", () => {
  filtersSection.style.display = "flex"; // Show filters
  activateFilter("all"); // Reset to all
});


filterButtons.forEach(button => {
  button.addEventListener("click", () => {
   
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    filterImagesByCategory(category);
  });
});


function showAllImages() {
  const images = document.querySelectorAll(".image-card");
  images.forEach(img => {
    img.style.display = "block";
  });
}


function filterImagesByCategory(category) {
  const images = document.querySelectorAll(".image-card");

  images.forEach(img => {
    const imgCategory = img.getAttribute("data-category");

    if (category === "all" || imgCategory === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}


function activateFilter(category) {
  filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === category);
  });
  filterImagesByCategory(category);
}

filtersSection.style.display = "none";

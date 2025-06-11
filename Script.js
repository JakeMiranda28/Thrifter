// Use the correct class name for your buttons (e.g., .shop-now-btn)
document.querySelectorAll(".shop-now-btn").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("data-link");
    if (link) {
      window.location.href = link;
      return;
    }

    // Find parent product card
    const productCard = this.closest('.product-card');
    if (!productCard) return;

    // Extract info from card
    const title = productCard.querySelector('h4')?.innerText || "";
    const price = productCard.querySelector('.price')?.innerText || "";
    const imgSrc = productCard.querySelector('img')?.src || "";

    // Fill modal fields
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalImage = document.getElementById("modalImage");
    const productModal = document.getElementById("productModal");

    if (modalTitle) modalTitle.innerText = title;
    if (modalPrice) modalPrice.innerText = price;
    if (modalImage) modalImage.src = imgSrc;
    if (productModal) productModal.style.display = "flex";
  });
});

// Close button
const closeModalBtn = document.getElementById("closeModal");
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", function() {
    const productModal = document.getElementById("productModal");
    if (productModal) productModal.style.display = "none";
  });
}

// Optional: Click outside modal to close
const productModal = document.getElementById("productModal");
if (productModal) {
  productModal.addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  });
}
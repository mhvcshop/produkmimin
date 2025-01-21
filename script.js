const products = [
  {
    id: 1,
    title: "TownHall 12 (Semi Max C)",
    description: "Deskripsi lengkap Akun COC 01.",
    price: "Rp 210.000",
    status: "Ready ✔",
    thumbnail: "akuncoc55.jpg",
    images: ["akuncoc55.jpg", "akuncoc55.jpg"],
  },
  {
    id: 2,
    title: "Akun COC 02",
    description: "Deskripsi lengkap Akun COC 02.",
    price: "Rp 850.000",
    status: "Habis",
    thumbnail: "https://via.placeholder.com/150",
    images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
  },
];

const productList = document.getElementById("product-list");

// Render list produk
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("card");
  productCard.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    <div class="card-content">
      <div class="card-title">${product.title}</div>
      <div class="card-description">${product.status}</div>
      <div class="card-price">${product.price}</div>
    </div>
  `;
  productCard.addEventListener("click", () => openProductDetails(product));
  productList.appendChild(productCard);
});

// Fungsi untuk membuka detail produk
function openProductDetails(product) {
  // Simpan data produk ke localStorage
  localStorage.setItem('selectedProduct', JSON.stringify(product));

  // Alihkan ke halaman infoakun.html
  window.location.href = "infoakun.html";
}

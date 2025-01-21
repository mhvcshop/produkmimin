const products = [
  {
    id: 1,
    title: "Akun COC 01",
    description: "Deskripsi lengkap Akun COC 01.",
    price: "Rp 1.000.000",
    status: "Ready",
    thumbnail: "link-thumbnail-1.jpg",
    images: ["link-image-1a.jpg", "link-image-1b.jpg", "link-image-1c.jpg"],
  },
  {
    id: 2,
    title: "Akun COC 02",
    description: "Deskripsi lengkap Akun COC 02.",
    price: "Rp 850.000",
    status: "Habis",
    thumbnail: "link-thumbnail-2.jpg",
    images: ["link-image-2a.jpg", "link-image-2b.jpg"],
  },
  // Tambahkan data lainnya
];

const productList = document.getElementById("product-list");

// Render daftar produk
products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("card");
  productCard.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    <div class="card-content">
      <div class="card-title">${product.title}</div>
      <div class="card-description">Status: ${product.status}</div>
      <div class="card-price">${product.price}</div>
    </div>
  `;
  productCard.addEventListener("click", () => openProductDetails(product));
  productList.appendChild(productCard);
});

// Fungsi membuka detail produk
function openProductDetails(product) {
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("product-details");
  detailContainer.innerHTML = `
    <img src="${product.images[0]}" alt="${product.title}">
    <div class="content">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Status: ${product.status}</p>
      <p>Harga: ${product.price}</p>
      <div class="buttons">
        <button onclick="location.href='#'">Chat Penjual</button>
        <button onclick="location.href='#'">Beli Sekarang</button>
      </div>
    </div>
  `;
  document.body.appendChild(detailContainer);
}

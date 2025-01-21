const products = [
  {
    id: 1,
    title: "Akun COC 01",
    description: "Deskripsi lengkap Akun COC 01.",
    price: "Rp 1.000.000",
    status: "Ready",
    thumbnail: "akuncoc55.jpg",
    images: ["akuncoc55.jpg", "https://via.placeholder.com/150"],
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
      <div class="card-description">Status: ${product.status}</div>
      <div class="card-price">${product.price}</div>
    </div>
  `;
  productCard.addEventListener("click", () => openProductDetails(product));
  productList.appendChild(productCard);
});

// Fungsi untuk membuka detail produk
function openProductDetails(product) {
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("product-details");
  detailContainer.innerHTML = `
    <button class="close" onclick="closeProductDetails()">×</button>
    <img src="${product.images[0]}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>Status: ${product.status}</p>
    <p>Harga: ${product.price}</p>
    <p>${product.description}</p>
    <div class="buttons">
      <button>Chat Penjual</button>
      <button>Beli Sekarang</button>
    </div>
  `;
  document.body.appendChild(detailContainer);
  detailContainer.style.display = "block";
}

// Fungsi untuk menutup detail produk
function closeProductDetails() {
  document.querySelector(".product-details").remove();
}

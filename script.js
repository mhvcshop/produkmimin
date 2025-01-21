const products = [
  {
    id: 1,
    title: "Akun COC 01",
    description: "Deskripsi lengkap Akun COC 01.",
    price: "Rp 1.000.000",
    status: "Ready",
    thumbnail: "akuncoc55.jpg",
    images: ["akuncoc55.jpg", "akuncoc55.jpg"],
  },
  {
    id: 2,
    title: "Akun COC 02",
    description: "Deskripsi lengkap Akun COC 02.",
    price: "Rp 850.000",
    status: "Habis",
    thumbnail: "akuncoc55.jpg",
    images: ["akuncoc55.jpg", "akuncoc55.jpg"],
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
  productCard.addEventListener("click", () => {
    window.location.href = infoakun.html?id=${product.id}; // Berpindah ke halaman infoakun.html
  });
  productList.appendChild(productCard);
});

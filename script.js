const products = [
  {
    id: 1,
    title: "TownHall 13 (Semi Max A)",
    description: "🔴 Ganti Nama    : ON (2000 Gems) <br>🔴 EXP Level    : 160 <br>🔴 Gems    : 12.220+ <br>🔴 Koin Liga    : 70+ <br>🔴 Koin Medal    : 160+",
    price: "R̶p̶ ̶2̶6̶0̶.̶0̶0̶0̶  Rp 250.000",
    status: "Ready ✔",
    thumbnail: "images/th13 semi max a 01.jpg",
    images: ["images/th13 semi max a 01.jpg","images/th13 semi max a 02.jpg","images/th13 semi max a 03.jpg"],
  },
  {
    id: 2,
    title: "TownHall 11 (Max)",
    description: "Login : SC ID <br> Gems : 1000",
    price: "Rp 170.000",
    status: "Ready ✔",
    thumbnail: "akun55-1.png",
    images: ["akun55-1.png", "akun55-2.png", "akun55-3.png"],
  },
    {
    id: 3,
    title: "TownHall 11 (Max)",
    description: "Login : SC ID <br> Gems : 1000",
    price: "Rp 170.000",
    status: "Ready ✔",
    thumbnail: "akun55-1.png",
    images: ["akun55-1.png", "akun55-2.png", "akun55-3.png"],
  },
    {
    id: 4,
    title: "TownHall 11 (Max)",
    description: "Login : SC ID <br> Gems : 1000",
    price: "Rp 170.000",
    status: "Ready ✔",
    thumbnail: "akun55-1.png",
    images: ["akun55-1.png", "akun55-2.png", "akun55-3.png"],
  },
    {
    id: 5,
    title: "TownHall 11 (Max)",
    description: "Login : SC ID <br> Gems : 1000",
    price: "Rp 170.000",
    status: "Ready ✔",
    thumbnail: "akun55-1.png",
    images: ["akun55-1.png", "akun55-2.png", "akun55-3.png"],
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

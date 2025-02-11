const products = [
  {
    id: 1,
    title: "TownHall 13 (Semi Max A)",
    description: "<table><tr><td>Ganti Nama</td><td>ㅤㅤ:ㅤ</td><td>ON (2000 Gems)</td></tr><tr><td>EXP Level</td><td>ㅤㅤ:ㅤ</td><td>160</td></tr><tr><td>Gems</td><td>ㅤㅤ:ㅤ</td><td>12.220+</td></tr><tr><td>Koin Liga</td><td>ㅤㅤ:ㅤ</td><td>70+</td></tr><tr><td>Koin Medal</td><td>ㅤㅤ:ㅤ</td><td>160+</td></tr></table>",
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
  {
    id: 6,
    title: "TownHall 10 (Max)",
    description: "<table><tr><td>Ganti Nama</td><td>ㅤㅤ:ㅤ</td><td>ON (2000 Gems)</td></tr><tr><td>EXP Level</td><td>ㅤㅤ:ㅤ</td><td>160</td></tr><tr><td>Gems</td><td>ㅤㅤ:ㅤ</td><td>12.220+</td></tr><tr><td>Koin Liga</td><td>ㅤㅤ:ㅤ</td><td>70+</td></tr><tr><td>Koin Medal</td><td>ㅤㅤ:ㅤ</td><td>160+</td></tr><br><tr><td>𝗥𝗮𝗷𝗮 𝗕𝗮𝗿𝗯𝗮𝗿</td><td>ㅤㅤ:ㅤ</td><td><strong>𝗟𝗲𝘃𝗲𝗹 𝟯𝟴</strong></td></tr><tr><td><strong>Ratu Pemanah</strong></td><td><strong>ㅤㅤ:ㅤ</strong></td><td><strong>Level 40</strong></td></tr><tr><td><strong>Pangeran Minion</td><td>ㅤㅤ:ㅤ</td><td>Level 20</strong></td></tr></table>",
    price: "Rp 120.000",
    status: "Ready ✔",
    thumbnail: "TOWNHALL 10/th 10 max 01.jpg",
    images: ["TOWNHALL 10/th 10 max 01.jpg","TOWNHALL 10/th 10 max 02.jpg","TOWNHALL 10/th 10 max 03.jpg","TOWNHALL 10/th 10 max 04.jpg","TOWNHALL 10/th 10 max 05.jpg","TOWNHALL 10/th 10 max 06.jpg"],
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

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// DATA DUMMY MENU
const menuData = [
  {
    name: "Nasi Liwet",
    price: "Rp 25.000",
    desc: "Nasi gurih khas Sunda",
    img: "gambar/nasi-liwet.jpg"
  },
  {
    name: "Ayam Bakar",
    price: "Rp 30.000",
    desc: "Ayam bakar dengan bumbu tradisional",
    img: "https://via.placeholder.com/150"
  }
];

// RENDER MENU
const menuContainer = document.getElementById("menuContainer");

menuData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <span>${item.price}</span>
  `;

  menuContainer.appendChild(card);
});

// DATA CABANG
const branchData = [
  {
    name: "Imah Nini Bogor",
    address: "Bogor, Jawa Barat"
  },
  {
    name: "Imah Nini Bandung",
    address: "Bandung, Jawa Barat"
  }
];

// RENDER CABANG
const branchContainer = document.getElementById("branchContainer");

branchData.forEach(branch => {
  const card = document.createElement("div");
  card.classList.add("branch-card");

  card.innerHTML = `
    <h3>${branch.name}</h3>
    <p>${branch.address}</p>
  `;

  branchContainer.appendChild(card);
});

// SCROLL ANIMATION (SIMPLE)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// FORM SUBMIT
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Pesan berhasil dikirim!";
  form.reset();
});
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ─── DATA MENU ───────────────────────────────────────────
const menuData = [
  {
    name: "Nasi Liwet",
    price: "Rp 25.000",
    desc: "Nasi gurih khas Sunda dimasak dengan santan dan rempah pilihan, disajikan dengan lauk tradisional.",
    img: "gambar/nasi-liwet.jpg" // isi path gambar di sini
  },
  {
    name: "Ayam Bakar Nini",
    price: "Rp 32.000",
    desc: "Ayam kampung dibakar dengan bumbu kecap hitam dan rempah dapur, empuk dan beraroma khas.",
    img: "gambar/ayam bakar.jpg" // isi path gambar di sini
  },
  {
    name: "Sayur Asem Sunda",
    price: "Rp 15.000",
    desc: "Sayur asem segar dengan kacang panjang, jagung, dan melinjo, cocok menemani nasi panas.",
    img: "gambar/sayur asem.jpg" // isi path gambar di sini
  },
  {
    name: "Pepes Ikan Mas",
    price: "Rp 28.000",
    desc: "Ikan mas segar dibungkus daun pisang bersama kemangi dan cabai merah, dikukus hingga meresap.",
    img: "gambar/pepes ikan nila.jpg" // isi path gambar di sini
  },
  {
    name: "Tahu & Tempe Goreng",
    price: "Rp 10.000",
    desc: "Tahu dan tempe goreng garing dengan balutan bumbu kunyit, disajikan dengan sambal terasi.",
    img: "gambar/tahu tempe goreng.jpg" // isi path gambar di sini
  },
  {
    name: "Es Cendol Nini",
    price: "Rp 12.000",
    desc: "Minuman khas Sunda dengan cendol hijau, santan segar, dan gula aren Tasikmalaya yang legit.",
    img: "gambar/es cendol.jpg" // isi path gambar di sini
  }
];

// ─── RENDER MENU ─────────────────────────────────────────
const menuContainer = document.getElementById("menuContainer");

menuData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const imgContent = item.img
    ? `<img src="${item.img}" alt="${item.name}">`
    : `<div class="img-placeholder" aria-label="${item.name}">📷</div>`;

  card.innerHTML = `
    ${imgContent}
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <span>${item.price}</span>
  `;

  menuContainer.appendChild(card);
});

// ─── DATA CABANG ─────────────────────────────────────────
const branchData = [
  {
    name: "Imah Nini Bogor",
    address: "Jl. Paledang No. 12, Bogor Tengah, Kota Bogor",
    phone: "(0251) 831-2247",
    hours: "Senin – Minggu, 08.00 – 21.00 WIB",
    maps: "#"
  },
  {
    name: "Imah Nini Bandung",
    address: "Jl. Buah Batu No. 47, Lengkong, Kota Bandung",
    phone: "(022) 730-5518",
    hours: "Senin – Minggu, 09.00 – 21.30 WIB",
    maps: "#"
  },
  {
    name: "Imah Nini Sukabumi",
    address: "Jl. Ahmad Yani No. 88, Cikole, Kota Sukabumi",
    phone: "(0266) 221-6730",
    hours: "Selasa – Minggu, 09.00 – 20.30 WIB",
    maps: "#"
  },
  {
    name: "Imah Nini Depok",
    address: "Jl. Margonda Raya No. 135, Beji, Kota Depok",
    phone: "(021) 776-4392",
    hours: "Senin – Minggu, 10.00 – 22.00 WIB",
    maps: "#"
  }
];

// ─── RENDER CABANG ───────────────────────────────────────
const branchContainer = document.getElementById("branchContainer");

branchData.forEach(branch => {
  const card = document.createElement("div");
  card.classList.add("branch-card");

  card.innerHTML = `
    <h3>${branch.name}</h3>
    <p class="branch-address">📍 ${branch.address}</p>
    <p class="branch-phone">📞 ${branch.phone}</p>
    <p class="branch-hours">🕐 ${branch.hours}</p>
    <a href="${branch.maps}" class="branch-maps-btn" target="_blank">Lihat di Maps</a>
  `;

  branchContainer.appendChild(card);
});

// ─── SCROLL ANIMATION ────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// ─── FORM SUBMIT ─────────────────────────────────────────
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.";
  form.reset();

  setTimeout(() => {
    message.textContent = "";
  }, 5000);
});

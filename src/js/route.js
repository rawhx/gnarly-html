import { getRole } from "./auth.js";

const routes = {
  "/": ["OW", "AK", "AG", "KO"],
  "/index.html": ["OW", "AK", "AG", "KO"],
  "/barang.html": ["OW", "AK", "AG", "KO"],
  "/mutasi.html": ["OW", "AK", "AG", "KO"],
  "/stok.html": ["OW", "AK", "AG", "KO"],
  "/transaksi.html": ["OW", "AK"],
  "/signin.html": ["guest"],
  "/pos.html": ["AK"],
  "/404.html": ["guest", "OW", "AK", "AG", "KO"],
};

export function protectRoute() {
  let path = window.location.pathname;

  console.log(path)
  
  // fallback untuk root
  if (path === "/") path = "/index.html";

  const allowedRoles = routes[path] || [];

  const currentRole = getRole() || "guest";
  console.log(currentRole)

  if (!allowedRoles.includes(currentRole)) {
    if (currentRole === "guest") {
      window.location.href = "./signin.html";
    } else {
      window.location.href = "./404.html";
    }
  }
}

// navigasi manual
export function navigateTo(page) {
  window.location.href = `./${page}.html`;
}

export function login(role) {
  localStorage.setItem("role", role);
}

export function logout() {
  localStorage.removeItem("role");
  window.location.href = "./signin.html";
}

export function getRole() {
  if (typeof window === "undefined") {
    console.warn("localStorage tidak tersedia di lingkungan ini.");
    return null;
  }

  const user = localStorage.getItem("user");
  if (!user) return null;

  try {
    const parsedUser = JSON.parse(user); 
    return parsedUser.role || null;
  } catch (error) {
    console.error("Gagal parsing user dari localStorage:", error);
    return null;
  }
}



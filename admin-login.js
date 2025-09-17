function loginAdmin() {
  const defaultPassword = "admin123"; // ✅ Default password
  const inputPassword = document.getElementById("adminPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  if (inputPassword === defaultPassword) {
    window.location.href = "admin-dashboard.html";
  } else {
    errorMsg.textContent = "Invalid password!";
  }
  return false; // prevent form submit refresh
}

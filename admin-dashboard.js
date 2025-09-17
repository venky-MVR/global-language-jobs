// admin-dashboard.js

// Logout function
function logout() {
  window.location.href = "index.html";
}

// ✅ Example data (replace with backend/API later)
const totalEmployees = 50;
const openJobs = 5;

// Set values dynamically
document.getElementById("employeeCount").textContent = totalEmployees;
document.getElementById("jobCount").textContent = openJobs;

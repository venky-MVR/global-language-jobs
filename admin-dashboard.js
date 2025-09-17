// Dummy data
let employees = [];
let jobs = ["Java Developer", "React Developer", "QA Engineer", "DevOps Engineer", "Data Analyst"];

// Fill employees (50 records)
for (let i = 1; i <= 50; i++) {
  employees.push({ id: i, name: `Employee ${i}`, role: `Role ${i}` });
}

// On page load
window.onload = function () {
  updateDashboard();
  renderEmployees();
  renderJobs();
};

// Update counts
function updateDashboard() {
  document.getElementById("employeeCount").textContent = employees.length;
  document.getElementById("jobCount").textContent = jobs.length;
}

// Render employee list
function renderEmployees() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";
  employees.forEach(emp => {
    const li = document.createElement("li");
    li.textContent = `${emp.id}. ${emp.name} - ${emp.role}`;
    list.appendChild(li);
  });
}

// Render job list
function renderJobs() {
  const list = document.getElementById("jobList");
  list.innerHTML = "";
  jobs.forEach((job, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${job}`;
    list.appendChild(li);
  });
}

// Add new job
function addJob() {
  const newJob = document.getElementById("newJob").value;
  if (newJob.trim() !== "") {
    jobs.push(newJob);
    document.getElementById("newJob").value = "";
    updateDashboard();
    renderJobs();
  } else {
    alert("Please enter a job title!");
  }
}

// Logout
function logout() {
  window.location.href = "index.html";
}

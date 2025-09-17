function loginEmployee() {
  const email = document.getElementById("employeeEmail").value;
  const password = document.getElementById("employeePassword").value;

  // For now, just log values (can be extended later)
  alert(`Employee Login\nEmail: ${email}\nPassword: ${password}`);
  return false; // prevent real form submit
}

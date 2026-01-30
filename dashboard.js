const API_BASE = "https://student-management-system-01vm.onrender.com";
const token = localStorage.getItem("accessToken");

// If no token → go back to login
if (!token) {
  window.location.href = "index.html";
}

// Fetch students
async function loadStudents() {
  try {
    const response = await fetch(`${API_BASE}/api/students/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const students = await response.json();
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
      const li = document.createElement("li");
      li.innerText = `${student.name} - ${student.email}`;
      list.appendChild(li);
    });

  } catch (error) {
    console.error("Error loading students:", error);
  }
}

// Logout
function logoutUser() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "index.html";
}

loadStudents();
const API_BASE = "https://student-management-system-01vm.onrender.com";
const token = localStorage.getItem("accessToken");

// If no token → go back to login
if (!token) {
  window.location.href = "index.html";
}

// Fetch students
async function loadStudents() {
  try {
    const response = await fetch(`${API_BASE}/api/students/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const students = await response.json();
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
      const li = document.createElement("li");
      li.innerText = `${student.name} - ${student.email}`;
      list.appendChild(li);
    });

  } catch (error) {
    console.error("Error loading students:", error);
  }
}

// Logout
function logoutUser() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "index.html";
}

loadStudents();
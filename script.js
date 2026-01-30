async function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorText = document.getElementById("error");

  errorText.textContent = "";

  try {
    const response = await fetch("https://student-management-system-01vm.onrender.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      // Save token
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      errorText.textContent = "Invalid username or password";
    }
  } catch (error) {
    errorText.textContent = "Server not responding. Try again later.";
  }
}

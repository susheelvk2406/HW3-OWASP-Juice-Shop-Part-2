document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageBox = document.getElementById("message");

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `message ${type}`;
  }

  function validateClientSide(email, password) {
    if (!email || !password) {
      return "Email and password cannot be empty.";
    }

    if (!email.includes("@")) {
      return 'Email must contain "@".';
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    return null;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    showMessage("", "");

    const clientError = validateClientSide(email, password);
    if (clientError) {
      showMessage(clientError, "error");
      return;
    }

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        showMessage(data.message || "Login failed.", "error");
        return;
      }

      showMessage(data.message || "Login successful.", "success");
      form.reset();
    } catch (error) {
      showMessage("Server error. Please try again later.", "error");
      console.error(error);
    }
  });
});
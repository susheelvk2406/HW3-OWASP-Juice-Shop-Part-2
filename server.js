const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function validateServerSide(email, password) {
  if (!email || !password) {
    return "Email and password are required.";
  }

  if (!email.includes("@")) {
    return 'Invalid email format. Email must contain "@".';
  }

  if (password.length < 8) {
    return "Invalid password. Password must be at least 8 characters long.";
  }

  return null;
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const validationError = validateServerSide(email, password);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const demoEmail = "admin@juice-sh.op";
  const demoPassword = "Password123";

  if (email !== demoEmail || password !== demoPassword) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  return res.status(200).json({
    message: "Login successful. Server-side validation passed."
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
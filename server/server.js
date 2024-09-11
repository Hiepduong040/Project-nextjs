const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post("/users", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Load existing users from db.json
    const dbPath = path.join(__dirname, "db.json");
    const dbData = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    // Add new user
    const newUser = {
      id: dbData.users.length + 1,
      username,
      email,
      password: hashedPassword, // Save hashed password
      role: 0, // Default role
      profilePicture: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg", // Default profile picture
      status: 1 // Default status
    };

    dbData.users.push(newUser);

    // Save updated users to db.json
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

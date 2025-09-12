const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel.js");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Basic validation
    if (!username || !password || !role) {
      return res.status(400).json({ message: "Username, password, and role are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.status(201).json({
      message: `User registered with username: ${username}`
    });

  } catch (err) {
    console.error(err.message);

    if (err.code === 11000) { // Mongo duplicate key error
      return res.status(409).json({ message: "Duplicate username not allowed" });
    }

    res.status(500).json({
      message: "Something went wrong during registration",
      error: err.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "Something went wrong during login",
      error: err.message
    });
  }
};

module.exports = {
  register,
  login
};

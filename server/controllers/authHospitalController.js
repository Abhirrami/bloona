const Hospital = require('../models/Hospital');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  try {
    const { name, hospital_id, location, contact, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const hospital = await Hospital.create({
      name,
      hospital_id,
      location,
      contact,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, message: "Hospital registered successfully", hospital });
  } catch (err) {
    console.error("Hospital signup error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};


exports.login = async (req, res) => {
  try {
    const { hospitalId, password } = req.body;
    const hospital = await Hospital.findOne({ where: { hospitalId } });

    if (!hospital) return res.status(400).json({ msg: "Invalid hospital ID" });

    const isMatch = await bcrypt.compare(password, hospital.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

    res.json({ msg: "Login successful", hospital });
  } catch (err) {
    res.status(500).json({ msg: "Login error", error: err.message });
  }
};

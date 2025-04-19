// server/controllers/authDonorController.js

const Donor = require('../models/Donor');
const bcrypt = require('bcrypt');

exports.donorSignup = async (req, res) => {
  try {
    const { name, age, donorId, bloodGroup, location, healthReport, contact, password } = req.body;
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const donor = await Donor.create({
      name,
      age,
      donorId,
      bloodGroup,
      location,
      healthReport,
      contact,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Donor registered successfully', donor });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.donorLogin = async (req, res) => {
  try {
    const { donorId, password } = req.body;
    const donor = await Donor.findOne({ where: { donorId } });

    if (!donor) {
      return res.status(404).json({ error: 'Donor not found' });
    }

    const isMatch = await bcrypt.compare(password, donor.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', donor });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

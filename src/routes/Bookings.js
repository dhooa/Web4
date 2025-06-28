const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Pemesanan berhasil dibuat', booking });
  } catch (error) {
    res.status(400).json({ message: 'Gagal membuat pemesanan', error: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Gagal mengambil pemesanan', error: error.message });
  }
});

module.exports = router;

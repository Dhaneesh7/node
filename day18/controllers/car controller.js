const Car = require('../models/carModel');

exports.showCarPage = async (req, res) => {
  try {
    const { name } = req.query;
    const allCars = await Car.find();
    const selectedCar = name ? await Car.findOne({ name }) : null;
    res.render('carDetails', { allCars, selectedCar });
  } catch (err) {
    res.render('error', { message: 'Failed to load cars.' });
  }
};

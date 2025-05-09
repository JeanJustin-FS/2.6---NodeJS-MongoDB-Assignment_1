const Cars = require("../models/cars");
const Car = require("../models/horsepowers");

cars = [];

//get all cars
const getAllCars = async (req, res) => {
  let queryString = JSON.stringify(req.query);
  queryString = queryString.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`);
  console.log(JSON.parse(queryString));
  const cars = await Cars.find(JSON.parse(queryString));
  try {
    res.status(200).json({
      message: "Get all successful",
      data: cars,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all cars",
      success: false,
      data: error,
    });
  }
};

//get car by id
const getCarById = async (req, res) => {
  const { id } = req.params;
  const car = await Cars.findById(id, req.body, { new: true });
  console.log("ID is:", id);
  try {
    res.status(200).json({
      message: "Get by ID successful",
      data: car,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Car not found",
      success: false,
      data: car,
    });
  }
};

//post a new car
const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      message: "Car created successfully",
      data: car,
    });
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create car",
    });
  }
};

//update car by id
const updateCarById = async (req, res) => {
  const id = req.params.id;
  const car = await Cars.findByIdAndUpdate(id, req.body, { new: true });
  console.log("ID is:", id);
  try {
    res.status(200).json({
      message: "Update successful",
      data: car,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Car not found",
      success: false,
      data: car,
    });
  }
};

//delete car by id
const deleteCarById = async (req, res) => {
  const id = req.params.id;
  const car = await Cars.findByIdAndDelete(id, req.body, { new: true });
  console.log("ID is:", id);
  try {
    res.status(200).json({
      message: "Delete successful",
      data: car,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Car not found",
      success: false,
      data: car,
    });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
};

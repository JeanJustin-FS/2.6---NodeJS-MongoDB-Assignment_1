const Horsepowers = require("../models/horsepowers");
const Horsepower = require("../models/cars");

horsepowers = [];

//get all cars
const getAllHorsepowers = async (req, res) => {
  let queryString = JSON.stringify(req.query);
  queryString = queryString.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`);
  console.log(JSON.parse(queryString));
  const horsepowers = await Horsepowers.find(JSON.parse(queryString));
  try {
    res.status(200).json({
      message: "Get all successful",
      data: horsepowers,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all horsepowers",
      success: false,
      data: error,
    });
  }
};

//get horsepower by id
const getHorsepowerById = async (req, res) => {
  const { id } = req.params;
  const horsepower = await Horsepowers.findById(id, req.body, { new: true });
  console.log("ID is:", id);

  try {
    res.status(200).json({
      message: "Get by ID successful",
      data: horsepower,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Horsepower not found",
      success: false,
      data: horsepower,
    });
  }
};

//post a new car
const createHorsepower = async (req, res) => {
  try {
    const horsepower = await Horsepower.create(req.body);

    res.status(201).json({
      success: true,
      message: "Horsepower created successfully",
      data: horsepower,
    });
  } catch (error) {
    console.error("Error creating horsepower:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create horsepower",
    });
  }
};

//update car by id
const updateHorsepowerById = async (req, res) => {
  const id = req.params.id;
  const horsepower = await Horsepowers.findByIdAndUpdate(id, req.body, { new: true });
  console.log("ID is:", id);
  try {
    res.status(200).json({
      message: "Update successful",
      id: id,
      data: horsepower,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Horsepower not found",
      success: false,
      data: horsepower,
    });
  }
};

//delete car by id
const deleteHorsepowerById = async (req, res) => {
  const id = req.params.id;
  const horsepower = await Horsepowers.findByIdAndDelete(id, req.body, { new: true });
  console.log("ID is:", id);
  try {
    res.status(200).json({
      message: "Delete successful",
      id: id,
      data: horsepower,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Horsepower not found",
      success: false,
      data: horsepower,
    });
  }
};

module.exports = {
  getAllHorsepowers,
  getHorsepowerById,
  createHorsepower,
  updateHorsepowerById,
  deleteHorsepowerById,
};

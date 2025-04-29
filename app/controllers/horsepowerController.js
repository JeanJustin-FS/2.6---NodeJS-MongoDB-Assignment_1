const Horsepowers = require('../models/horsepowers')

horsepowers = [{
    "_id": "680bd5eaec979149c79149bb",
    "id": 1,
    "make": "Nissan",
    "model": "Skyline",
    "year": 1998,
    "horsepower": "340hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd614ec979149c79149bd",
    "id": 2,
    "make": "Toyota",
    "model": "Supra",
    "year": 1997,
    "horsepower": "300hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd620ec979149c79149bf",
    "id": 3,
    "make": "Mazda",
    "model": "RX-7",
    "year": 2000,
    "horsepower": "310hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd62fec979149c79149c1",
    "id": 4,
    "make": "Audi",
    "model": "R-8",
    "year": 2008,
    "horsepower": "320hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bdac5791ddd240e4ef11d",
    "id": 5,
    "make": "Tesla",
    "model": "Model Y",
    "year": 2024,
    "horsepower": "350hp",
    "completed": "true",
    "__v": 0
}]

//get all cars
const getAllHorsepowers = async (req, res) => {
    const horsepowers = await Horsepowers.find({});
    console.log('GET ALL cars')
    if (!horsepowers || horsepowers.length === 0) {
        return res.status(404).json({ 
            message: 'No horsepowers found', 
            success: false, 
            data: horsepowers
        });         
    }
    res.status(200).json({ 
        message: 'Get ALL successful', 
        data: horsepowers, 
        success: true
    });
    };

//get car by id
const getHorsepowerById = async (req, res) => {
    const id = (req.params.id);
    const horsepower = await Horsepowers.findById(id);
    console.log('ID is:', id);

    if (!horsepower) {
        return res.status(404).json({ 
            message: 'Horsepower not found', 
            success: false, 
            data: horsepower
        });
    }
    res.status(200).json({ 
        message: 'Get by ID successful', 
        id: id, 
        data: horsepower, 
        success: true
    });
};

//post a new car
const createHorsepower = async (req, res) => {
    const newHorsepower= await Horsepowers.create(req.body, { new: true });
    console.log('New car is:', newHorsepower);
    
    if (!newHorsepower || !newHorsepower.make || !newHorsepower.model || !newHorsepower.year || !newHorsepower.horsepower) {
        return res.status(400).json({ 
            message: 'Invalid car data', 
            success: false, 
            data: newHorsepower
        });
    }

    res.status(201).json({ 
        message: 'Create successful', 
        success: true,
        data: newHorsepower, 
    });
};

//update car by id
const updateHorsepowerById = async (req, res) => {
    const id = (req.params.id);
    const horsepower = await Horsepowers.findByIdAndUpdate(id, req.body,{ new: true });
    console.log('ID is:', id);
    
    if (!horsepower) {
        return res.status(404).json({ 
            message: 'Horsepower not found', 
            success: false, 
            data: horsepower
        });
    }
    res.status(200).json({ 
        message: 'Update successful', 
        id: id, 
        data: horsepower, 
        success: true
    });
    };

//delete car by id
const deleteHorsepowerById = async (req, res) => {
    const id = (req.params.id);
    const horsepower = await Horsepowers.findByIdAndDelete(id, req.body, { new: true });
    console.log('ID is:', id);
    
    if (!horsepower) {
        return res.status(404).json({ 
            message: 'Horsepower not found', 
            success: false, 
            data: horsepower
        });     

    }
    res.status(200).json({ 
        message: 'Update successful', 
        id: id, 
        data: horsepower, 
        success: true
    });
    
    };

    module.exports = {
        getAllHorsepowers,
        getHorsepowerById,
        createHorsepower,
        updateHorsepowerById,
        deleteHorsepowerById
    };
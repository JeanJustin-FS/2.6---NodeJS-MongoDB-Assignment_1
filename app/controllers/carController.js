const Cars = require('../models/cars')

cars = [{
    "_id": "680bd3c3cfc35f2daf9fb20d",
    "id": 1,
    "make": "Nissan",
    "model": "Skyline",
    "year": 1998,
    "horsepower": "340hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd4564fb1df97ef45d65d",
    "id": 2,
    "make": "Toyota",
    "model": "Supra",
    "year": 1997,
    "horsepower": "300hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd4664fb1df97ef45d65f",
    "id": 3,
    "make": "Mazda",
    "model": "RX-7",
    "year": 2000,
    "horsepower": "310hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bd4704fb1df97ef45d661",
    "id": 4,
    "make": "Audi",
    "model": "R-8",
    "year": 2008,
    "horsepower": "320hp",
    "completed": "true",
    "__v": 0
},
{
    "_id": "680bdabe791ddd240e4ef11b",
    "id": 5,
    "make": "Tesla",
    "model": "Model Y",
    "year": 2024,
    "horsepower": "350hp",
    "completed": "true",
    "__v": 0
}]

//get all cars
const getAllCars = async (req, res) => {
    const cars = await Cars.find({});
    console.log('GET ALL cars')
        res.status(200).json({ message: 'Get ALL successful', data: cars, success: true});

        if (!cars || cars.length === 0) {
            return res.status(404).json({ 
                message: 'No cars found', 
                success: false, 
                data: cars
            });
        }
        res.status(200).json({ 
            message: 'Get ALL successful', 
            data: cars, 
            success: true
        });

    };

//get car by id
const getCarById = async (req, res) => {
    const id = (req.params.id);
    const car = await Cars.findById(id);
    console.log('ID is:', id);

    if (!car) {
        return res.status(404).json({ 
            message: 'Car not found', 
            success: false, 
            data: car
        });
    }
    res.status(200).json({ 
        message: 'Get by Id successful', 
        id: id, 
        data: car, 
        success: true
    });
};

//post a new car
const createCar = async (req, res) => {
    const newCar= await Cars.create(req.body, { new: true });
    console.log('New car is:', newCar);
    
    if (!newCar || !newCar.make || !newCar.model || !newCar.year || !newCar.horsepower) {
        return res.status(400).json({ 
            message: 'Invalid car data', 
            success: false, 
            data: newCar
        });
    }
    
    res.status(201).json({ 
        message: 'Create successful', 
        data: newCar, 
        success: true
    });
};

//update car by id
const updateCarById = async (req, res) => {
    const id = (req.params.id);
    const car = await Cars.findByIdAndUpdate(id, req.body, { new: true });
    console.log('ID is:', id);
    
    if (!car) {
        return res.status(404).json({ 
            message: 'Car not found', 
            success: false, 
            data: car
        });     

    }
    res.status(200).json({ 
        message: 'Update successful', 
        id: id, 
        data: car, 
        success: true
    });
    };

//delete car by id
const deleteCarById = async (req, res) => {
    const id = (req.params.id);
    const car = await Cars.findByIdAndDelete(id, req.body, { new: true });
    console.log('ID is:', id);  
    
    if (!car) {
        return res.status(404).json({ 
            message: 'Car not found', 
            success: false, 
            data: car
        });
    }
    res.status(200).json({ 
        message: 'Delete successful', 
        id: id, 
        data: car, 
        success: true
    });
};

    module.exports = {
        getAllCars,
        getCarById,
        createCar,
        updateCarById,
        deleteCarById
    };

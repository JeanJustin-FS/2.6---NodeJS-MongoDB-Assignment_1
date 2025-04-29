const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({

    id:{    
        type: Number,
    
    },
    make: {
        type: String,
    
    },
    model: {
        type: String,
    
    }, 
    year: {
        type: Number,
    
    },  
    horsepower: {
        type: String,
    
    },
    completed: {
        type: Boolean,
    
    }
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Car', carsSchema);


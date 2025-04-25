const mongoose = require('mongoose');

const horsepowerSchema = new mongoose.Schema({

id:{    
    type: Number,
    required: true,
    trim: true,
    unique: true,
},
make: {
    type: String,
    required: [true, 'You need to add a make'],
    trim: true,
    unique: true,
},
model: {
    type: String,
    required: [true,'You need to add a model'],
    trim: true,
    unique: true,
}, 
year: {
    type: Number,
    required: [true,'You need to add a year'],
    trim: true,
    unique: true,
},  
horsepower: {
    type: Number,
    required: [true,'You need to add a horsepower'],
    trim: true,
    unique: true,
},
completed: {
    type: Boolean,
    required: true,
    trim: true,
}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Horsepower', horsepowerSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'tutor', 'admin'], default: 'student' },
    
    
    tutorProfile: {
        subjects: [String],
        location: String,
        salary: Number,
        experience: String,
        isVerified: { type: Boolean, default: false },
        availability: { type: String, default: 'Available' }
    },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
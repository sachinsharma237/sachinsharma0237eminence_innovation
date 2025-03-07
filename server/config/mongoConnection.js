const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/user');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            retryWrites: true,  //retry cretain writes operation on error
            retryReads: true
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

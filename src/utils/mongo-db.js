const mongodb = require('mongoose');
const config = require('config');

exports.startMongoDB = async () => {
    try {
        await mongodb.connect(config.get('database.host'), { 
            useNewUrlParser: true 
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}
const mongoose = require('mongoose')

class DatabaseConnection {

    constructor(connectionString) {
        mongoose.Promise = global.Promise;
        this.connectionString = connectionString;

        const database = mongoose.connection;
        database.on('error', console.error.bind(console, 'MongoDB connection error'))
    }

    connect() {
        return mongoose.connect(this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }
}

module.exports = DatabaseConnection;
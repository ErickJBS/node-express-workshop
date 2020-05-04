const dotenv = require('dotenv');
const App = require('./app')
const Connection = require('./db/db-connnection')

dotenv.config();

const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING;

const app = new App(port, [
    require('./routes/notes.router'),
]);
const database = new Connection(connectionString);

database.connect().then(() => {
    console.log('Database connected successfully')
    return app.listen();
}).then(() => {
    console.log(`App running in port ${port}`)
}).catch((error) => {
    console.log(error)
})

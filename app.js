const express = require('express');
const app = express();
const PORT = 5000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config();
// middleware
app.use(express.json());
app.use(express.static('./public'))
// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);

const start = async() => {
    try {
            await connectDB(process.env.MONGO_URI)
            app.listen(PORT, ()=> {
                console.log(`server is listening to ${PORT}...`);
            })
    } catch (error) {
        console.log(error);
    }
}

start();



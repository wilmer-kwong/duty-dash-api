const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

// env config
if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
    console.log("Loaded env files.");
}

// database init
let dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl).then(() => {
    console.log("Database connected successfully.");
}).catch((err) => {
    console.log("There was an error connecting to the DB: " + err);
});

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4000;

app.use('/api', routes);

const apiRoutes = [
    'POST: api/player_data',
    'GET: api/player_data',
    'PATCH: api/player_data/:id',
    'PUT: api/player_data/:id',
    'DELETE: api/player_data/:id',
];

app.get('/', (req, res) => {
    res.send("Duty Dash API Routes: " + JSON.stringify(apiRoutes));
});

app.get('/healthcheck', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "OK",
    });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
});
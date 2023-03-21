require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());

//routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/trainer', require('./routes/trainerRoutes'));
app.use('/user', require('./routes/userRoutes'));
app.use('/program', require('./routes/programRoutes'));
app.use('/plan', require('./routes/planRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

// database connection
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log('Valami nem jó');
        return;
    }
    console.log('Sikeres');
});

app.set('view engine', 'ejs');

app.listen(PORT);

console.log(`listening on port http://localhost:${PORT}`);

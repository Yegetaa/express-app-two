const express = require("express");


const app = express();
const PORT = 3001;

//morgan middleware function
const morgan = require('morgan');
app.use(morgan('dev'));

//routes
app.get('/', (req , res) => {
    console.log(req.url);

    res.send('<h1>Hello</h1>');
});

const brandsRoutes = require ("./routes/brands");
app.use("/brands", brandsRoutes);

app.listen(PORT, () => {
    console.log("up and running");
});
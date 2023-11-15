const express = require('express');
const cors = require('cors');

const Destiny = require('./models/Destiny.js');
const mongoose = require('mongoose');
const DesRouter = require("./routers/destiny.js");
const port = 3001;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


mongoose.connect('mongodb+srv://polinaM:Qvw6u99zRxvIjYM3@cluster0.klwpmt2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

app.use('/api/getDes',DesRouter);

app.listen(port, () => console.log("listening on port 3001"));

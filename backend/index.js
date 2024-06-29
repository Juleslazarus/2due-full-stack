const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const Product = require('./models/todo.model.js')
const productRoute = require('./routes/todo.route.js')
const cors = require('cors')

//middleware
app.use(express.json()); 
require('dotenv').config(); 

const corsOptions = {
    origin: "*", 
    credentials: true, 
    optionSuccessStatus: 200
}

// app.use(cors(corsOptions));
app.use(cors({
    origin: "https://2due-v6.netlify.app", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}))


console.log(`${process.env.DB_PASS}`)

app.get('/', (req, res) => {
    res.send('Hello from api server'); 
})

//routes: 

app.use('/2due/todos', productRoute); 

mongoose.connect(`mongodb+srv://jules:${process.env.DB_PASS}@2duecluster.clrmxdh.mongodb.net/2Due?retryWrites=true&w=majority&appName=2DueCluster`)
.then(() => {
    console.log("Connected To Database")
    app.listen(3000, () => {
        console.log("server is running on port 3000 :)")
    })
}) 
.catch(() => {
    console.log("Connection Failed")
})  
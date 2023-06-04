const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoute = require('./routes/ProductRoute')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const bodyParser = require('body-parser')

const app = express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/mongodb_training',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use('/api/admin', adminRoute);
app.use('/api/users/', userRoute)


app.listen(5000, ()=> console.log('Server up and running...'));
const express = require('express');
const { Port,connectDB } = require('./config/mogodb');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const admin = require('./Config/firebase');

app.use(express.json());
const cors = require('cors');

connectDB();


app.listen(Port , () => {
  console.log(`Server is running on port ${Port}`);
}
)

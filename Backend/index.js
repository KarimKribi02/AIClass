const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
const cors = require('cors');


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}
)

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./Routers/egRouters');
const todorouter = require('./routers/todoRouters'); // <-- Add this line
dotenv.config();
const app = express();
const PORT=3000;
connectDB();
app.use(express.json());
app.use(cors());
app.use(router);
app.use('/todo', todorouter);
app.listen(PORT, () => {
    console.log('Server is a running on port http://localhost:${PORT}');
})
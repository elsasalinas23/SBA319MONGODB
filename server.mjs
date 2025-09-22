// Imports 
import express from 'express';
import dotenv from 'dotenv';
import globalErr from './middleware/globalErr.mjs';
import log from './middleware/loggingMiddleware.mjs'
import connectDB from './database/conn.mjs';



//Setups 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();


// Middleware
app.use(express.json());
app.use(log);


// Routes
app.use("/api/serviceDog",seriveDogRoutes);

// Erro Handling Middleware
app.use(globalErr)


// Listener 
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});
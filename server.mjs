// Imports 
import express from 'express';
import dotenv from 'dotenv';
import globalErr from './middleware/globalErr.mjs';
import log from './middleware/loggingMiddleware.mjs'
import connectDB from './database/conn.mjs';
import ownerRoutes from './routes/ownerRoutes.mjs';
import trainerRoutes from './routes/trainerRoutes.mjs';
import serivecDogRoutes from './routes/serviceDogRoutes.mjs' 


//Setups 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();


// Middleware
app.use(express.json());
app.use(log);


// Routes
app.use("/api/serviceDog", serivecDogRoutes);
app.use('/api/owners', ownerRoutes);
app.use('/api/trainers', trainerRoutes);

// Erro Handling Middleware
app.use(globalErr)


// Listener 
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});
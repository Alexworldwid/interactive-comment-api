import 'dotenv/config';
import express from 'express';
import routes from "./routes/index.mjs";
import mongoose from 'mongoose';
import cors from "cors"

const mongoUri = process.env.MONGO_URI;

const app = express();

// CORS middleware
app.use(cors({
    origin: 'https://interactive-comment-section-frontend-mentor.vercel.app' 
}));
  

// @ts-ignore
mongoose.connect(mongoUri)
    .then(() => {
        console.log('database sucessfully connected')
    })
    .catch((err) => {
        console.log(`error: ${err}`)
    })
        
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.status(200).send('hello from express on vercel')
})


export default app;
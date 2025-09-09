import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/user.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/v1/user",userRoute);


app.listen(PORT, ()=>{
    console.log(`server listen at ${PORT}`);
});
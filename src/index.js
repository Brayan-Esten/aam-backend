import dotenv from 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes/index.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
});
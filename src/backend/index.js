import express from 'express';
import routes from './routes';

const PORT = 8086;
const app = express();

routes(app).listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
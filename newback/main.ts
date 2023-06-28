import express from 'express';

import dataRouter from './controllers/data';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/data', dataRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})


import express from 'express';

import * as ds from '../services/data';

const dataRouter = express.Router();

dataRouter.post('/', (req, res) => {
    const dataset = req.body.dataset;
    const fields = req.body.fields;
    
    ds.createDataset(dataset, fields, 1)
});

export default dataRouter;
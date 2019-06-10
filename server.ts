import { DataStore } from './data/data';
import express from 'express';
const app = express();

import * as bodyparser from 'body-parser'
const jsonParser = bodyparser.json();

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';

app.get("/", (req, res, next) => {
    res.send('response from the base route. ');
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour)

app.listen(process.env.PORT || 4200, () => {
    console.log('Server started ...');   
});
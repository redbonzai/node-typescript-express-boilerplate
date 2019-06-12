import express from 'express';
const app = express();

import morgan from 'morgan'
import * as bodyparser from 'body-parser'
import path from 'path';

const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({
    extended: true
});

import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';

import { CustomRequestHandler } from './models/express';
const logger = morgan('dev')

// const authenticator: CustomRequestHandler = (req, res, next) => {
//     const username = 'Ronaldo123';
//     req.user = username;
//     next();
// }

// app.use(authenticator);

// // the logger is loaded in every request handler. 
// // it could be limited to a single route by adding a route as the first parameter.
 app.use(logger);

// middleware to get static files: images, etc.
app.use('/static', express.static(path.resolve('./', 'public', 'img')));

app.get("/", (req, res, next) => {
    res.send('response from the base route. ');
});

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.patch('tours/:id', jsonParser, apiUpdateTour);

app.listen(process.env.PORT || 4200, () => {
    console.log('Server started ...');   
});
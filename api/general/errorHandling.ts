import { RequestHandler, ErrorRequestHandler } from 'express';
import { PublicError } from './../../models/shared/messages';
export const apiErrorHandler: ErrorRequestHandler = (err,req, res, next) => {
    switch(req.app.get('env')) {
        case 'development':
            console.log('error: ', err);
            return res.status(err.status).json(err);
        case 'production':
            // only logging in production
            return res.status(err.status).json(err.PublicError())
    }
}
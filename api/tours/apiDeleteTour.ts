import { DataStore } from './../../data/data';
import { RequestHandler } from 'express';
export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => {       
        return item.id === tourID
    });

    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json({
            "status": "success",
            "message": "Item successfully removed"
        })
    } else {
        res.json({
            "status": "error",
            "message": "Item not removed"
        })
    }
}
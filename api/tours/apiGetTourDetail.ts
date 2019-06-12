import { DataStore } from './../../data/data';
import { RequestHandler } from "express";
import { TourDetail } from '../../models/shared/tourDetail';
import { fileMapper } from '../general/static';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find((element: any) => element.id === tourID);
    
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(fileMapper(req.app.get('env')));
        const selectedReviews = DataStore.reviews.filter((item: any) => item.tourID === tourID);
        res.json(new TourDetail(selectedTour, selectedReviews, imageUrls));
    } else {
        res.json({
            "status": "failed",
            "message": "element not found"
        });
    };
}
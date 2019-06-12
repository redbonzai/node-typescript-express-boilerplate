import { DataStore } from './../../data/data';
import { RequestHandler } from 'express';
import { getFileUploader } from '../general/static';

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id === tourID);

    if (tourIndex === -1) {
        res.json({
            'status': 'error',
            'message': 'Tour not found to upload an image for'
        })

    } else {
        const upload = getFileUploader(req.app.get('env'));
        upload(req, res, (err) => {
            if (err) {
                console.log('upload error: ', err)
                res.json({
                    status: 'error',
                    message: 'File upload has failed!'
                })

                return ;
            }

            DataStore.tours[tourIndex].img.push(req.file.filename);
            res.json({
                status: 'success',
                message: 'File was successfuly uploaded!'
            })
        })
    }
}
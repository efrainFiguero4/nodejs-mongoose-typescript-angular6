import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { InformeSchema } from '../models/informeModel';

const Informe = mongoose.model('informes', InformeSchema);

export class informeController {


	get_informes(req: Request, res: Response, next: NextFunction) {
		if (req.query.mes)
			req.query.mes = ("0" + req.query.mes).slice(-2);
		Informe.find(req.query, (err, informe) => {
			if (err) return next(err);
			res.json(informe);
		});
	}

	get_informe_id(req: Request, res: Response, next: NextFunction) {
		if (req.query.mes)
			req.query.mes = ("0" + req.query.mes).slice(-2);
		Informe.findOne(req.query, (err, informe) => {
			if (err) return next(err);
			res.json(informe);
		});
	}

	add_informe(req: Request, res: Response, next: NextFunction) {
		let newInforme = new Informe(req.body);
		newInforme.save((err, informe) => {
			if (err) return next(err);
			res.json(informe);
		});
	}

	update_informe(req: Request, res: Response, next: NextFunction) {
		Informe.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, informe) => {
			if (err) return next(err);
			res.json(informe);
		});
	}

	delete_informe(req: Request, res: Response, next: NextFunction) {
		Informe.remove({ _id: req.params.id }, (err, informe) => {
			if (err) return next(err);
			res.json({ message: 'Successfully deleted informe!' });
		});
	}

}

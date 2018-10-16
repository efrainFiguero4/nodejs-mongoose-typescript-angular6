import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { LiquidacionSchema } from '../models/liquidacionModel';

const Liquidacion = mongoose.model('liquidacion', LiquidacionSchema);

export class LiquidacionController {

	add_liquidacion(req: Request, res: Response) {
		let newLiquidacion = new Liquidacion(req.body);
		newLiquidacion.save((err, liquidacion) => {
			if (err) {
				res.send(err);
			}
			res.json(liquidacion);
		});
	}

	get_liquidaciones(req: Request, res: Response) {
		console.log(req.query)
		Liquidacion.find(req.query, (err, liquidacion) => {
			if (err) {
				res.send(err);
			}
			res.json(liquidacion);
		});
	}

	get_liquidacion_id(req: Request, res: Response) {
		Liquidacion.findById(req.params.id, (err, liquidacion) => {
			if (err) {
				res.send(err);
			}
			res.json(liquidacion);
		});
	}

	update_liquidacion(req: Request, res: Response) {
		Liquidacion.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, liquidacion) => {
			if (err) {
				res.send(err);
			}
			res.json(liquidacion);
		});
	}

	delete_liquidacion(req: Request, res: Response) {
		Liquidacion.remove({ _id: req.params.id }, (err, liquidacion) => {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Successfully deleted liquidacion!' });
		});
	}

}

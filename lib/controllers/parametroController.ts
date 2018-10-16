import * as mongoose from 'mongoose';
import { ParametroSchema } from '../models/parametroModel';
import { Request, Response } from 'express';

const Parametro = mongoose.model('parametros', ParametroSchema);

export class ParametroController {

	add_parametro(req: Request, res: Response) {
		let newParametro = new Parametro(req.body);
		newParametro.save((err, parametro) => {
			if (err) {
				res.send(err);
			}
			res.json(parametro);
		});
	}

	get_parametros(req: Request, res: Response) {
		Parametro.find({}, (err, parametro) => {
			if (err) {
				res.send(err);
			}
			res.json(parametro);
		});
	}

	get_parametro_id(req: Request, res: Response) {
		Parametro.findById(req.params.id, (err, parametro) => {
			if (err) {
				res.send(err);
			}
			res.json(parametro);
		});
	}

	update_parametro(req: Request, res: Response) {
		Parametro.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, parametro) => {
			if (err) {
				res.send(err);
			}
			res.json(parametro);
		});
	}

	delete_parametro(req: Request, res: Response) {
		Parametro.remove({ _id: req.params.id }, (err, parametro) => {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Successfully deleted parametro!' });
		});
	}

}

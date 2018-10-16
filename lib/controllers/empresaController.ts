import * as mongoose from 'mongoose';
import { EmpresaSchema } from '../models/empresaModel';
import { Request, Response } from 'express';

const Empresa = mongoose.model('empresas', EmpresaSchema);

export class EmpresaController {

	add_empresa(req: Request, res: Response) {
		let newEmpresa = new Empresa(req.body);
		newEmpresa.save((err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json(empresa);
		});
	}

	get_empresas(req: Request, res: Response) {
		console.log(req.query)
		Empresa.find(req.query, (err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json(empresa);
		});
	}

	get_empresa_id(req: Request, res: Response) {
		Empresa.findById(req.params.id, (err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json(empresa);
		});
	}

	update_empresa(req: Request, res: Response) {
		Empresa.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json(empresa);
		});
	}

	delete_empresa(req: Request, res: Response) {
		Empresa.remove({ _id: req.params.id }, (err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Successfully deleted empresa!' });
		});
	}

}

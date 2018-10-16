import * as mongoose from 'mongoose';
import { ParametroSchema } from './parametroModel';
import { EmpresaSchema } from './empresaModel';
import { InformeSchema } from './informeModel';

const Schema = mongoose.Schema;

export const LiquidacionSchema = new Schema({
	fechaemision: {
		type: String,
		required: 'Enter a first name'
	},
	items: {
		type: {
			diferencia: {
				type: String
			},
			empresa: {
				type: EmpresaSchema
			},
			informe: {
				type: InformeSchema
			},
			mes: {
				type: String
			},
			monto: {
				type: String
			},
			porcentaje: {
				type: String
			},
			tipoventa: {
				type: ParametroSchema
			}
		}
	},
	montototal: {
		type: String
	},
	tipocontrato: {
		type: String
	},
	tipomoneda: {
		type: Number
	}
});

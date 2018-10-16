import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ParametroSchema = new Schema({
	codigo: {
		type: String,
		required: 'required'
	},
	descripcion: {
		type: String,
		required: 'required'
	},
	montos: {
		type: {
			calcular: {
				type: String,
				required: 'required'
			},
			montoinicio: {
				type: String,
				required: 'required'
			},
			montofin: {
				type: String,
				required: 'required'
			}
		}
	},
	nombre: {
		type: String
	}
});

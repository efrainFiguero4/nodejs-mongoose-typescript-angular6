import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InformeSchema = new Schema({
	anio: {
		type: String
	},
	comprobante: {
		type: {
			boleta: String,
			credito: String,
			debito: String,
			factura: String,
			precepcion: String,
			retencion: String,
			total: String,
			totalanterior: String
		}
	},
	eid: {
		type: String

	},
	fechageneracion: {
		type: String
	},
	mes: {
		type: String
	}
});

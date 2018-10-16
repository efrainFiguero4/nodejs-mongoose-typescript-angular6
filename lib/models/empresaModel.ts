import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmpresaSchema = new Schema({
	anumerodocumento: {
		type: String,
		required: 'Enter a first name'
	},
	arazonsocial: {
		type: String,
		required: 'Enter a first name'
	},
	comisionista: {
		type: String

	},
	direccion: {
		type: String
	},
	eid: {
		type: Number
	},
	estadoinforme: {
		type: String
	},
	fechageneracioninforme: {
		type: String
	},
	fechainiciouso: {
		type: String
	},
	fechapagocomisionista: {
		type: String
	},
	fecharenovacionanual: {
		type: String
	},
	implementador: {
		type: String
	},
	modalidad: {
		type: String
	},
	provincia: {
		type: String
	},
	tipocontrato: {
		type: String
	},
	tipoventa: {
		type: String
	},
	usoanualsinigv: {
		type: String
	}
});

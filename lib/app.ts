import * as express from "express";
import * as mongoose from "mongoose";
import * as cors from "cors";

import { RoutesEmpresa } from "./routes/EmpresaRoutes";
import { RoutesParametro } from "./routes/ParametroRoutes";
import { RoutesInforme } from "./routes/informeRoutes";
import { RoutesLiquidacion } from "./routes/liquidacionRoutes";

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	autoIndex: false, // Don't build indexes
	reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 50, // Maintain up to 10 socket connections
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0,
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6
};


class App {

	public app: express.Application;
	public routeEmpresa: RoutesEmpresa = new RoutesEmpresa();
	public routeParametro: RoutesParametro = new RoutesParametro();
	public routeInforme: RoutesInforme = new RoutesInforme();
	public routeLiquidacion: RoutesLiquidacion = new RoutesLiquidacion();
	public mongoUrl: string = 'mongodb://localhost/informes-db';
	//public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/informes-db';

	constructor() {
		this.app = express();
		this.config();
		this.routeEmpresa.routes(this.app);
		this.routeParametro.routes(this.app);
		this.routeInforme.routes(this.app);
		this.routeLiquidacion.routes(this.app);
		this.mongoSetup();
	}

	private config(): void {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(express.static('public'));
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, options);
	}

}

export default new App().app;

import { Request, Response, NextFunction } from "express";
import { informeController } from "../controllers/InformeController";

export class RoutesInforme {

	public _informeController: informeController = new informeController()

	public routes(app): void {
		// Empresa
		app.route('/api/informes').get((req: Request, res: Response, next: NextFunction) => {
			// middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
            /*if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }*/
			next();
		}, this._informeController.get_informes)

			// POST endpoint
			.post(this._informeController.add_informe)
			.put(this._informeController.update_informe)
		app.route('/api/informe').get(this._informeController.get_informe_id)
		// empresas detail
		app.route('/api/informes/:id')
			// get specific contact
			.delete(this._informeController.delete_informe)

	}
}

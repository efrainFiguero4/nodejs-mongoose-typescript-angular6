import { Request, Response, NextFunction } from "express";
import { ParametroController } from "../controllers/parametroController";

export class RoutesParametro {

	public contactController: ParametroController = new ParametroController()

	public routes(app): void {

		app.route('/api/parametros').get((req: Request, res: Response, next: NextFunction) => {
			// middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
            /*if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }*/
			next();
		}, this.contactController.get_parametros)

			// POST endpoint
			.post(this.contactController.add_parametro)
			.put(this.contactController.update_parametro)

		// empresas detail
		app.route('/api/parametros/:id')
			// get specific contact
			.get(this.contactController.get_parametro_id)
			.delete(this.contactController.delete_parametro)
	}
}

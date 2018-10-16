import { Request, Response, NextFunction } from "express";
import { LiquidacionController } from "../controllers/liquidacionController";

export class RoutesLiquidacion {

	public _liquidacionController: LiquidacionController = new LiquidacionController();

	public routes(app): void {
		// Empresa
		app.route('/api/liquidacion').get((req: Request, res: Response, next: NextFunction) => {
			// middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
            /*if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }*/
			next();
		}, this._liquidacionController.get_liquidaciones)

			// POST endpoint
			.post(this._liquidacionController.add_liquidacion)
			.put(this._liquidacionController.update_liquidacion)

		// empresas detail
		app.route('/api/liquidacion/:id')
			// get specific contact
			.get(this._liquidacionController.get_liquidacion_id)
			.delete(this._liquidacionController.delete_liquidacion)

	}
}

import { Request, Response, NextFunction } from "express";
import { EmpresaController } from "../controllers/empresaController";

export class RoutesEmpresa {

	public contactController: EmpresaController = new EmpresaController()

	public routes(app): void {
		// Empresa
		app.route('/api/empresas').get((req: Request, res: Response, next: NextFunction) => {
			// middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
            /*if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }*/
			next();
		}, this.contactController.get_empresas)

			// POST endpoint
			.post(this.contactController.add_empresa)
			.put(this.contactController.update_empresa)

		// empresas detail
		app.route('/api/empresas/:id')
			// get specific contact
			.get(this.contactController.get_empresa_id)
			.delete(this.contactController.delete_empresa)

	}
}

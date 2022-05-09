import { adminService } from "./admin.service.mjs";

class AdminController {
	create(req, res, next) {
		adminService.create(req.body).then((result) => {
			res.json({
				statusCode: 200,
				message: 'Admin created successfully',
				result,
			});
		}).catch(next);
	}
	list(req, res, next) {
		adminService.list().then((result) => {
			res.json({
				statusCode: 200,
				message: 'Success',
				result,
			});
		}).catch(next);
	}
}

export const adminController = new AdminController();
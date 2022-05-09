import { AdminModel } from "./admin.model.mjs";

class AdminService {
	async create(data) {
		const result = await AdminModel.create(data);
		return result._id;
	}
	async list() {
		const result = await AdminModel.find({});
		return result;
	}
}

export const adminService = new AdminService();
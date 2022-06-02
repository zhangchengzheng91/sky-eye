import { Controller } from 'egg';

export default class ProjectController extends Controller {
    public async create() {
        const { ctx } = this;
        const body = ctx.request.body
        ctx.body = await ctx.service.project.create(body);
    }
}

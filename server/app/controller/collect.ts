import { Controller } from 'egg';

export default class CollectController extends Controller {
    public async collect() {
        const { ctx } = this;
        console.log('ctx.request.body=', ctx.request.body)
        ctx.body = await ctx.service.collect.getCollect(ctx.request.body);
    }
}

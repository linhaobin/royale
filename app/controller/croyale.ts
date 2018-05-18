import { Controller } from 'egg'

export default class CroyaleController extends Controller {
  public async index() {
    this.ctx.body = 'croyale hi!!!!!!!!'
  }

  public async version() {
    const { ctx } = this

    ctx.body = await ctx.service.croyale.version()
  }
}

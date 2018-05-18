import { Service } from 'egg'
import * as path from 'path'
import { RequestOptions } from 'urllib'

const baseURL = 'api.royaleapi.com/'

export default class CroyaleService extends Service {
  public async get(url, options: RequestOptions = {}) {
    const { config, ctx } = this
    const resp = await ctx.curl(path.join(baseURL, url), {
      dataType: 'json',
      headers: {
        auth: config.royaleapiToken,
        ...options.headers
      },
      ...options
    })
    return resp
  }

  public async version(): Promise<string> {
    const resp = await this.get('version', { dataType: 'text' })

    return resp.data
  }
}

import * as assert from 'assert'
import { Context } from 'egg'
import { app } from 'egg-mock/bootstrap'

describe('test/app/service/Croyale.test.js', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  it('version', async () => {
    const version = await ctx.service.croyale.version()

    console.log('version', version)
    assert(version === '12.0.101')
  })
})

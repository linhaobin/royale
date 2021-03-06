import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.croyale.index)
  router.get('/version', controller.croyale.version)
}

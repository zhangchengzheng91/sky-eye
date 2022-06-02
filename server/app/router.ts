import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/', controller.home.index)
  router.post('/api/collect', controller.collect.collect)

  router.post('/api/project/create', controller.project.create)
};

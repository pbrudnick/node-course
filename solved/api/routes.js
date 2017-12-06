module.exports = function (app) {
  const taskControllers = require('./controllers/task-controllers');

  // todoList Routes
  app.route('/tasks')
    .get(taskControllers.list)
    .post(taskControllers.create);


  app.route('/tasks/:taskId')
    .get(taskControllers.read)
    .put(taskControllers.update)
    .delete(taskControllers.delete);
};
const mongoose = require('mongoose'),
  Task = mongoose.model('Task');

exports.list = function (req, res) {
  Task.find({})
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

exports.create = function (req, res) {
  Task.create(req.body)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

exports.read = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete = function (req, res) {
  Task.remove({ _id: req.params.taskId }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

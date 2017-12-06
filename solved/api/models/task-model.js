const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'task name is mandatory'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Task', TaskSchema);
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
  text: {
    type: Strong,
    default: ''
  }
});

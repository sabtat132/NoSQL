//routes are responsible for deciding which controller method to execute on a given URL
//ex: pointpark.edu/it --> pulls up IT page
//can reroute you to somewhere else automatically

var Todo = require('./models/todo.js');

function getTodos(res){
  Todo.find(function (err, todos){
    if(err){
      res.send(err);
    }

    res.json(todos);
  });
};

module.exports = function(app) {

  //gets all taks
  app.get('/api/todos' , function(req, res){
    //db call
    getTodos(res);
  });

  //create a task and send back after creation
  app.post('/api/todos', function(req, res){

    Todo.create({
      text: req.body.text,
      done: false
    }, function(err, todo){
      if(err)
        res.send(err);

        getTodos(res);
      });
    });

    //Delete a task
    app.delete('/api/todos/:todo_id', function(req, res){

      Todo.remove({
        _id: req.params.todo_id
      }, function(err, todo){
        if(err)
          res.send(err);

          getTodos(res);
        });
      });

      //application
      app.get('*', function(req, res){
        res.sendFile(__dirname + '/public/js/index.html')
      });
     };
    }
  }

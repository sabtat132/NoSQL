anjular.module('todoController', [])

  .controller('mainController', ['$scope', '$http', 'Todos', function($scope, $http, Todos){
    $scope.formData = {};
    $scope.loading = true;

    //Get
    Todos.get()
      .success(function(data){
        $scope.todos = data;
        $scope.loading = false;
      });

    //Create
    $scope.createTodo = function(){

      //validate the formData to make sure that comething is there
      //if form is empty, nothing will happen
      if($scope.formData.text != undefined){
        $scope.loading = true;

        //call the breate function from our service - returns a promsise object
        Todos.create($scope.formData)

        //if the creation is successful then call our get function to get all the new Todos
        .success(function(data){
          $scope.loading = false;
          $scope.formData = {}; //clear the form so our user is ready to enter another todo
          $scope.todos = data; //assign our new list of todos
        });
      }
    };

    //Delete tasks
    $scope.deleteTodo = function(id){
      $scope.loading = true;

      Todos.delete(id)
      //if successful creation, call our get function to get all the new Todos
      .success(function(data){
        $scope.loading = false;
        $scope.todos = data; //assign our new list of Todos
      });
    };
  }]);

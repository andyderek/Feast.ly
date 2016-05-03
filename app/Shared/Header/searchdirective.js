angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', '$state', 'Recipe', function($scope, Recipes, $state, Recipe) {
  $scope.userInput = {};
  $scope.list = results;

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput['q'] = input.split(" ").join('+');
    console.log('this is the query:', $scope.userInput)
    Recipes.getRecipes($scope.userInput).then(function(data){
        console.log('data:',data)
         $scope.list = data.data;
          console.log('results:', $scope.list)
        // return data;
        $state.go('results');
    })
  };

    $scope.showRecipe = function(value){
      console.log(value);
      thisRecipe = value;
    }
    $scope.showRecipe();
}]);

angular.module('ToDOApp', []);

angular.module('ToDOApp').controller('ToDoListCtrl', ['$scope', function($scope) {

	$scope.list = [];
	$scope.newItem = '';

	$scope.appendItem = function() {
		$scope.list.push({
			'done': false,
			'content' : $scope.newItem
		});
		$scope.newItem = '';
	};

	$scope.completeItem = function(index) {
		$scope.list[index].done = true;
	};

	$scope.deleteItem = function(index) {
		$scope.list.splice(index, 1);
	};
}]);

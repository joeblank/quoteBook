angular.module('quoteBook')
.controller('mainCtrl', function($scope, dataService) {

  var saveQuotes = function() {
    localStorage.setItem('myQuotes', JSON.stringify($scope.quotes));
  }

// $scope.quotes = dataService.getData();
$scope.remove = function(textDel) {
  dataService.removeData(textDel);
  $scope.quotes = dataService.getData();
  saveQuotes();
}
$scope.addQuote = function() {
  var newQuote = {
    text: $scope.quoteToAdd,
    author: $scope.authorToAdd
  };
  if(dataService.addData(newQuote)) {
    $scope.quoteToAdd = '';
    $scope.authorToAdd = '';
    $scope.quotes = dataService.getData();
    saveQuotes()
  }
}


if (localStorage.getItem('myQuotes')) {
  $scope.quotes = JSON.parse(localStorage.getItem('myQuotes'));
} else {
  $scope.quotes = dataService.getData();
}

});

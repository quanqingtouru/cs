(function() {
    angular.module('Ueditor', []).controller('MainController', ['$scope', '$interval', function($scope, $interval) {
        $scope.testContent = '';
        $interval(function() {
            console.log($scope.content1);
        }, 1000);
    }]).run(function($timeout) {

    })
})()

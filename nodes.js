
angular.module('TreeApp',[]).controller('treeController',['$scope', function ($scope) {
    $scope.node = {showInputBox: false, child: ''};

    $scope.trees = [
        {
            label: 'Root Node',
            children: [],
            node: {
                showInputBox: false,
                child: ''
            }
        }
    ];

    $scope.$watch('node.showInputBox', function () {
        $scope.plus = $scope.node.showInputBox ? '[-]' : '[+]';
    });


    $scope.parent = $scope.trees[0].label;


    $scope.addNewNode = function (parent) {
        console.log(parent);
        console.log($scope.node.child);
        $scope.trees.push({label: $scope.node.child})

    }
}])
.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});


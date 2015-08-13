
angular.module('TreeApp',[]).controller('treeController',['$scope', function ($scope) {
    //$scope.node = {showInputBox: false, child: ''};

    $scope.showInputBoxes = true;

    $scope.nodes = [
        {
            label: 'Root Node',
            children: [],
            showInputBox: false
        }
    ];

    $scope.plus = '[+]';

    /*$scope.$watch('node.showInputBox', function () {
        //console.log(this);
        $scope.plus = $scope.nodes.showInputBox ? '[-]' : '[+]';
    });*/

    $scope.status = {};
    $scope.status.showInputBox = true;


    $scope.c = {};
    $scope.addNewNode = function (parent) {
        //console.log(parent.label);
        //console.log($scope.c.childEle);

        var par = searchParent($scope.nodes,parent.label);
        par.children.push({
            label: this.node.c.childEle,
            children: [],
            showInputBox: false
        });

        this.node.c.childEle = '';
        console.log(this.node);
        this.node.showInputBox = false;
        this.plus = this.node.showInputBox ? '[-]' : '[+]';

    };
    
    $scope.exportToJson = function () {
        angular.toJson($scope.nodes);
    };

    function searchParent(myArr, myKey) {
        for(var i = 0; i < myArr.length; i++){
            if(myArr[i].label === myKey) return myArr[i];
            else return searchParent(myArr[i].children, myKey);
        }
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


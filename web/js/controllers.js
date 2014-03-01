// Main controller
var wizzaControllers = angular.module("wizzaControllers", []);

wizzaControllers.controller("WizzaInfosController",
        function($scope) {
            $scope.applicationName = "Wizza";

            $scope.logon = function() {
                console.log("login : " + $scope.loginText);
                console.log("password : " + $scope.passwordText);
                console.log("DO LOGIN");
            };
        });

wizzaControllers.controller("PizzaDetailController", ["$scope", "$routeParams", "Pizzas",
    function($scope, $routeParams, Pizzas) {
        $scope.pizza = Pizzas.get({pizzaId: $routeParams.pizzaId}, function(pizza) {
            $scope.mainImage = pizza.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImage = imageUrl;
        };
    }
]);

wizzaControllers.controller("PizzasController", ["$scope", "Pizzas",
    function($scope, Pizzas) {

        $scope.pizzasList = Pizzas.query();

        $scope.orderProp = "name";
    }
]);

wizzaControllers.controller("CaddyController", ["$scope",
    function($scope) {
        $scope.items = [{name: "old", price: 25}];

        $scope.addItem = function(pizza) {
            var temp = $scope.items;
            var index = temp.indexOf(pizza);
            if (index === -1) {
                temp.push(pizza);
                for (var item in $scope.items) {
                    console.log($scope.items[item]);
                }
                $scope.items = temp;
            }
        };

        $scope.removeItem = function(pizza) {
            var index = $scope.items.indexOf(pizza);
            $scope.items.splice(index, 1);
        };
        
        $scope.getTotal = function(){
            var total = 0;
            var temp = $scope.items;
            for(var i = 0;i<temp.length;i++){
                total += temp[i].price;
            }
            return total;
        };
    }
]);

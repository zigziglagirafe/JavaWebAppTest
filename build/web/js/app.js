// Main controller
var wizzaApp = angular.module("wizzaApp", [
    "ngRoute", "wizzaControllers","pizzasFilters","wizzaServices","wizzaAnimations"
]);

wizzaApp.config(["$routeProvider",
    function($routeProvider){
        $routeProvider.when("/pizzasList", {
            templateUrl : "partials/pizzasList.html",
            controller : "PizzasController"
        }).
        when("/pizzasList/:pizzaId", {
            templateUrl : "partials/pizzaDetail.html",
            controller : "PizzaDetailController"
        }).
        otherwise({
            redirectTo:"/pizzasList"
        });
    }
    
]);


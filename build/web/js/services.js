var wizzaServices = angular.module("wizzaServices", ["ngResource"]);

wizzaServices.factory("Pizzas", ["$resource",
    function($resource){
        return $resource("json/:pizzaId.json", {}, {
            query:{method:"GET", params:{pizzaId:"pizzaList"}, isArray:true}    
    });
}]);
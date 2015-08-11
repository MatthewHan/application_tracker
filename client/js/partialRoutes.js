app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/index.partial.html',
        controller: "MainController",
        controllerAs: "main"
    })
    .when('/jobs/new',{
    	templateUrl: '/partials/new.partial.html',
    	controller: "MainController", 
    	controllerAs: "main"
    })
    .when('/jobs/show',{
    	templateUrl: '/partials/show.partial.html',
    	controller: "MainController", 
    	controllerAs: "main"
    })
    .otherwise({
        redirectTo: '/',
    });
});
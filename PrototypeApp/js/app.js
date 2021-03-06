angular.module('ProtoApp', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
             .when('/', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when('/rooms', {
                controller: 'MainController',
                templateUrl: 'views/rooms.html'
            })
            .when('/checkin', {
                controller: 'MainController',
                templateUrl: 'views/guests.html'
            })
            .when('/maintanence', {
                controller: 'MainController',
                templateUrl: 'views/maintenance.html'
            })
            .when('/guests', {
                controller: 'MainController',
                templateUrl: 'views/guests.html',
                title: 'Guests'
            })
            .when('/guests/:guestID', {
                controller: 'MainController',
                templateUrl: 'views/guestDetails.html',
                title: 'Guests Details'
            })
            .when('/logout', {
                redirectTo: 'logout.php'
            })
            .otherwise({
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            });
        $locationProvider.html5Mode(true);
    });
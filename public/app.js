var app = angular.module('prerender-tutorial', ['ui.router'])

.config(function($urlRouterProvider, $locationProvider, $stateProvider){

  $stateProvider
    .state('home', {
      url:  '/',
      templateUrl: 'views/homeView.html',
      controller: 'homeController'
    })
    .state('about', {
      url:  '/about',
      templateUrl: 'views/aboutView.html',
      controller: 'aboutController'
    })
    .state('features', {
      url:  '/features',
      templateUrl: 'views/featuresView.html',
      controller: 'featuresController'
    });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({ enabled: true,  requireBase: false});
  $locationProvider.hashPrefix('!');
});

app.controller('mainController', function ($scope) {
  // We will create an seo variable on the scope and decide which fields we want to populate
  $scope.seo = {
    pageTitle : '', pageDescription : ''
  };
  $scope.message = "curl message";
});


app.controller('homeController', function($scope) {
  // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content.
  // Additionally you can create a service to update the SEO variables - but that's for another tutorial.
  $scope.$parent.seo = {
    pageTitle : 'AngularJS SEO Tutorial',
    pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.'
  };
  $scope.titles = 'Welcome home, Bobby';
});

app.controller('aboutController', function($scope) {
  $scope.$parent.seo = { pageTitle : 'About',
    pageDescripton: 'We are a content heavy website so we need to be indexed.'
  };
  $scope.titles = 'Who We Are';
});

app.controller('featuresController', function($scope) {
  $scope.$parent.seo = { pageTitle : 'Features', pageDescripton: 'Check out some of our awesome features!' };
  $scope.titles = 'You\'re in the features pages';
});

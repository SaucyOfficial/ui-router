var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  var contentState={
    name:'content',
    url:'/content',
    template:'<h1>This is the content of site</h1>'
  }

  var homeState={
    name:'home',
    url:'/home',
    templateUrl:'home.html'
  }

  var formState={
    name:'form',
    url:'/form',
    templateUrl:'form.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(formState);
  $stateProvider.state(contentState);
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

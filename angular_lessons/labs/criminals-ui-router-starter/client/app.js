const angular = require('angular');
require('angular-ui-router');

<<<<<<< HEAD
require('angular-ui-router');

angular
  .module('criminals', ['ui.router'])
  .config(uiRouterSetup);
// injecting the dependencies...a function passed into config
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
  function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      // template: '<home></home>'
      template: '<h1>Home</h1>'
    })
  .state('about', {
    url: '/about',
    // template: '<about></about>'
    template: '<h1>About</h1>'
// no semicolon until the last one we are chaining them
  })
  .state('criminals', {
    url: '/criminals',
    template: '<criminals></criminals>'
    // template: '<h1>About</h1>'
  })
  .state('criminalsShow', {
  url: '/criminals/:criminalId',
template: '<criminal-show></criminal-show>'
})
// .state('criminalsNew', {
// url: '/criminals/new:criminal',
// template: '<criminals-new></criminals-new>')
// };
  $urlRouterProvider.otherwise('/');
=======
angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
}

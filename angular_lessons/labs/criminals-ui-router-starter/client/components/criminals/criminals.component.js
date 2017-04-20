const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};
// name of app for the module...
angular
	.module('criminals')
	.component('criminals', component);

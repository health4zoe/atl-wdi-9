const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
  controller: controller,
  template: template
};

angular
<<<<<<< HEAD
.module('criminals')
.component('criminalShow', component);
=======
  .module('criminals')
  .component('criminalsShow', component);
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee

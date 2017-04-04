angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.addPresident = addPresident;
    vm.all = [];
    vm.newPresident = {};

// this.all = [{}, {}, {}]
//
//
//   this.all = [
//     {name: 'George Washington', start: 1789, end: 1797 },
//     {name: 'John Adams', start: 1797, end: 1801 },
//     {name: 'Thomas Jefferson', start: 1801, end: 1809 },
//     {name: 'James Madison', start: 1809, end: 1817 },
//     {name: 'Joshua Quincy Kushner', start: 2021, end: 2029 },
//   ];
//   this.addPresident = addPresident;
//   this.newPresident = {};

activate();
// passing in a response and object
function activate() {}
$http
      .get('/presidents')
      .then(function setAll(response) {
        console.log(response);
        vm.all = response.data.presidents;
      });
  }



  function addPresident(){
    this.all.push(this.newPresident);
    this.newPresident = {};
  }
}

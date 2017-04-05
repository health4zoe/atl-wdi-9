angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalService'];

function CriminalsController(CriminalService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  self.getCriminals();
  function getCriminals(){
     CriminalsService.getCriminals().then(function
  (criminalsData) {
      // .then(function(response)
        self.all = criminalsData;
    });
  }
  function addCriminal(){

  CriminalsService.addCriminal(self.newCriminal).then(function(){
      // .post('/criminals', self.newCriminal)
      // .then(function(response){
      //   getCriminals();
    self.getCriminals();
    self.newCriminal = {};
  });
  }
  function deleteCriminal(criminal){
  CriminalsService.deleteCriminal(criminal)
      // .delete("/criminals/" + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

  }

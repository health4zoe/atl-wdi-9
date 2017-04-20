<<<<<<< HEAD
CriminalsShowController.$inject = ['$stateParams','CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
  const vm = this;

// vm.current = {};

activate();

function activate() {
  loadCurrentCriminal();
}


function loadCurrentCriminal() {
  console.log($stateParams);

  CriminalsService
  .loadCurrent($stateParams.criminalId)
  .then(function resolve(response) {
    vm.current = response.data.criminal;
  });
}
}
=======
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
}

>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
module.exports = CriminalsShowController;

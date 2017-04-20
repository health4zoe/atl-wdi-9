CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}
<<<<<<< HEAD
=======

>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee


	// HOW IT DOES STUFF when it gets returned goes to responsedata
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
				console.log(response)
				vm.criminals = response.data.criminals; // array of criminals
				vm.loading = false;
			});
	}
}

module.exports = CriminalsController;

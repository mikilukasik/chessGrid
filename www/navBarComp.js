(function() {

  function navBarCtrl($scope) {

    var ctrl = this;

    
  }

  angular.module('appModule')
    .component('navBar', {
      templateUrl: 'navBar.html',
      controller: navBarCtrl,
      bindings: {
        // address: '=',
        // form: '<',
        // hasRiskAddress: '<'
      }
    });

})();
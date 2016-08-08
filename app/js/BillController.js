// skyApp.controller("BillController", ["$http", function($http) {
skyApp.controller("BillController", ["BillFactory", "BillService", function(BillFactory, BillService) {
    
    var self = this;
    
    BillService.getBill().then(function(response) {
      self.bill = response;
      console.log(self.bill);
    });

  }]);

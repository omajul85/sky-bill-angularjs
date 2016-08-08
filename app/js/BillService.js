skyApp.service("BillService", ["BillFactory", "$http", function(BillFactory, $http) {

  this.getBill = function() {
    var url = "http://safe-plains-5453.herokuapp.com/bill.json";
    return $http.get(url).then(_createBill);
  };

  function _createBill (response) {
    var bill;
    bill = new BillFactory(
      response.data.statement,
      response.data.total,
      response.data.package,
      response.data.callCharges,
      response.data.skyStore
    );
    return bill;
  };

}]);
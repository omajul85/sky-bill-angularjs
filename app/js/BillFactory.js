skyApp.factory("BillFactory", function() {
  
  var Bill = function(statement, total, package, callCharges, skyStore) {
  	this.statement = statement;
  	this.total = total;
  	this.package = package;
  	this.callCharges = callCharges;
  	this.skyStore = skyStore;
  };
  
  return Bill;
  
});
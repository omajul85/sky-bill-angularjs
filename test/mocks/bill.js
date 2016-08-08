module.exports = [{
  request: {
    method: "GET",
    path: "http://safe-plains-5453.herokuapp.com/bill.json",
  },

  response: {
    data: {
      total: "136.03",
      statement : {
        generated: "2015-01-11",
        due: "2015-01-25",
      }
    }
  }
}];

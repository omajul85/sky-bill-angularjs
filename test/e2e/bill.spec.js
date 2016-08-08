var mock = require('protractor-http-mock');

describe("app shows bill total on the home page", function() {
  beforeEach(function() {
    mock(["bill"]);
  });

  afterEach(function(){
    mock.teardown();
  });

  it("should show right total", function() {
    browser.get('/');
    expect($("#total").getText())
      .toEqual("136.03");
  });
});

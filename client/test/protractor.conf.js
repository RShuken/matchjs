exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.spec.js'],
  framework: 'jasmine2',
  multiCapabilities: [{
    browserName: 'chrome'
  }]
};
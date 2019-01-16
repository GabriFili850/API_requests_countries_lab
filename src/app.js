const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Countries();
  country.getData();

});

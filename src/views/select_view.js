const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;

}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
    this.container.addEventListener('change', (event) => {
        const selectedIndex = (event.target.value);
        PubSub.publish('SelectView:change', selectedIndex);
    });
  });
};

SelectView.prototype.populate = function (allCountries) {
  allCountries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option)
  });
};

module.exports = SelectView;

const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-detail-ready', (event) => {
    const country = event.detail;
    this.render(country);
    console.log(event);
  })
};

ResultView.prototype.render = function (country) {
  this.container.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = country.name;
  this.container.appendChild(title);

  const flag = document.createElement('img');
  flag.src = country.flag;
  flag.width = 400;
  this.container.appendChild(flag);

  const region = document.createElement('h2');
  region.textContent = 'Region';
  const countryRegion = document.createElement('p');
  countryRegion.textContent = country.region;
  this.container.appendChild(region);
  this.container.appendChild(countryRegion);

  const languages = document.createElement('h2');
  languages.textContent = 'Languages';
  this.container.appendChild(languages);


  const unorderedList = document.createElement('ul');
  this.container.appendChild(unorderedList);
  country.languages.forEach((language) =>{
    const listedLanguages = document.createElement('li');
    listedLanguages.textContent = language.name;
    this.container.appendChild(listedLanguages);
  })


};
module.exports = ResultView;

const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.data;
}



Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) =>{
    this.data = data;
    PubSub.publish('Countries:data-loaded', this.data);
  })
};
module.exports = Countries;

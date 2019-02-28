const RequestHelper= require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {

}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/munros');
  const data = requestHelper.get()
  .then(function(data){
    PubSub.publish('Munros:sending-data', data);
  });


};



module.exports = Munros;

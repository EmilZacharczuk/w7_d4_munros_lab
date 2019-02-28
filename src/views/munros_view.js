const MunrosViewList = require('../views/munros_view_list.js');
const PubSub = require('../helpers/pub_sub.js');

const MunrosView = function () {

}

MunrosView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:sending-data', (evt) => {
    this.render(evt.detail);
  })
};

MunrosView.prototype.render = function(arraysOfMunros) {
  arraysOfMunros.forEach((item) => {

    const munroName = this.getName(item);
    const munroHeight = this.getHeight(item);
    const munroMeaning = this.getMeaning(item);

    const munrosViewList = new MunrosViewList(munroName,munroHeight,munroMeaning);
    munrosViewList.render();
  });
};

MunrosView.prototype.getName = function (item) {
  return item.name;
};

MunrosView.prototype.getMeaning = function (item) {
  return item.meaning;
};

MunrosView.prototype.getHeight = function (item) {
  return item.height;
};


module.exports = MunrosView;

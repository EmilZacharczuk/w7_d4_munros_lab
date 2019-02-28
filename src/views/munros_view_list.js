const MunrosViewList = function (name,height,meaning) {
  this.name = name;
  this.height = height;
  this.meaning = meaning;
}

MunrosViewList.prototype.render = function () {
  const container = document.querySelector('#munros')

  const name = this.munroName(this.name);
  const munroDetailList = document.createElement('ul');

  container.appendChild(name);
  name.appendChild(munroDetailList);
  this.details(this.meaning,this.height,munroDetailList);

};

MunrosViewList.prototype.munroName = function (name) {
  const munroName = document.createElement('h2');
  munroName.textContent = name;
  return munroName;
};

MunrosViewList.prototype.details = function (meaning,height,parent) {

  this.listItem(meaning,parent);
  this.listItem(height,parent);

}

MunrosViewList.prototype.listItem = function (text,parent) {

  const listItem = document.createElement('li');
  listItem.textContent = text;
  parent.appendChild(listItem);

};

module.exports = MunrosViewList;

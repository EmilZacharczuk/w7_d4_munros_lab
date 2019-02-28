const Munros = require('./models/munros');
const MunrosView = require('./views/munros_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const munros = new Munros();
  munros.getData();

  const munrosView = new   MunrosView();
  munrosView.bindEvents();

});

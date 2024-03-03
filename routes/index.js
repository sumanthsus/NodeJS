const Router = require('express');

const route = Router.Router();

module.exports = () => {
  route.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });
  return route;
};

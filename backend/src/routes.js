const express = require('express');

const routes = express.Router();

const TweetControllers = require('./controllers/TweetController');
const LikeControllers = require('./controllers/LikeController');

routes.get('/tweets', TweetControllers.index);
routes.post('/tweets', TweetControllers.store);

routes.post('/likes/:id', LikeControllers.store)

module.exports = routes;
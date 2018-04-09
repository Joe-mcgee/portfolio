const express = require('express');
const router = express.Router();
const request = require('request-promise');




module.exports = () => {

  router.get('/getPosts', (req, res) => {

    request.get({
      uri: 'https://thulsmans2994.wordpress.com/',
      json: true
    })
    .then((content) => {
      res.send(content)
    })

  })

  return router;
}
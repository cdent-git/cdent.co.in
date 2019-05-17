const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const TEMP = mongoose.model("tempAdmin");

/* GET home page. */
router.get('/', function(req, res, next) {

  // TODO loading page
  res.render('index', { title: 'Express' });
});

//TODO create some unquie url right now for development it's ok with this url
router.get('/master/dashbord', (req, res) => {  
  TEMP.find({}).then(admin => {
    res.status(200).json({body : admin})
  }).catch(err => res.status(400).json({err}))
})

module.exports = router;

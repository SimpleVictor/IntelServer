var express = require('express');
var router = express.Router();
var mraa = require('mraa');
var myPin = new mraa.Gpio(6);

var pir = require('pir').use(myPin);

pir.on('ready', function(pir){
    console.log('Ready and waiting...');

      pir.on('movement:start', function(time){
          console.log('something moved');
      });
      pir.on('movement:end', function(time){
          console.log('nothing is moving now');
      });
});



/* GET users listing. */
router.get('/test', function(req, res, next) {

      res.json("hello");

});

module.exports = router;

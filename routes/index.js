var express = require('express');
var router = express.Router();

var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
    io: new Edison()
});

board.on("ready", function() {

    // Create a new `motion` hardware instance.
    var motion = new five.Motion(6);

    // "calibrated" occurs once, at the beginning of a session,
    motion.on("calibrated", function() {
        console.log("calibrated");
    });

    // "motionstart" events are fired when the "calibrated"
    // proximal area is disrupted, generally by some form of movement
    motion.on("motionstart", function() {
        console.log("motionstart");
    });

    // "motionend" events are fired following a "motionstart" event
    // when no movement has occurred in X ms
    motion.on("motionend", function() {
        console.log("motionend");
    });

    // "data" events are fired at the interval set in opts.freq
    // or every 25ms. Uncomment the following to see all
    // motion detection readings.
    // motion.on("data", function(data) {
    //   console.log(data);
    // });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

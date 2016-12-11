var express = require('express');
var router = express.Router();
var requests = require('request');

/* GET users listing. */

router.get('/home', function(req, res, next) {

    var obj = {
        active: '1',
        respond: 'user is home'
    }

    requests({
        url: 'https://wrinkle-8419a.firebaseio.com/Listener/InHouseUser/.json',
        method: "PATCH",
        body: obj,
    }, function(err, response){
        if(err){
            console.log("There was an error");
            response.json("FAILED");
            res.json("failed");

        }else{
            console.log("Successfully added into db");
            response.json("done");
            res.json("It works");
        };
    });

});


router.get('/nothome', function(req, res, next) {

    var obj = {
        active: '1',
        respond: 'user is not home'
    }

    requests({
        url: 'https://wrinkle-8419a.firebaseio.com/Listener/InHouseUser/.json',
        method: "PATCH",
        body: obj,
    }, function(err, response){
        if(err){
            console.log("There was an error");
            response.json("FAILED");
            res.json("failed");

        }else{
            console.log("Successfully added into db");
            response.json("done");
            res.json("It works");
        };
    });

});

module.exports = router;

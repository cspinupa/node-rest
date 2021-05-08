
var express = require('express');
var router = express.Router();
var bodyParser = require ('body-parser');

router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

var User = require('./User');

//Create a new user
router.post('/',function(req, res) {
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function(err, user) {
        if (err)
            return res.status(500).send("There was a problem adding the information to the database");
        res.send(200).send(user);
    });
});

//return all the users in the database
router.get('/',function(req,res){
   User.find({},
    function(err, users) {
        if (err)
            return res.status(500).send("There was a problem finding the user");
        res.status(200).send(users);
    }) 
});

module.exports = router;
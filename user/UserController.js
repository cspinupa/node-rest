
var express = require('express');
var router = express.Router();
var bodyParser = require ('body-parser');

router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

var User = require('./User');


/** open API to be added here */
router.post('/',function(req, res) {
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function(err, user) {
        if (err)
            return res.status(500).send("There was a problem adding the information to the database");
        res.status(200).send(user);
    });
});

//return all the users in the database
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: successfully return list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Name of the user
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         description: email of the user
 *                         example: john.doe@yahoo.com
 *                       password:
 *                         type: string
 *                         description: password of the user
 *                         example: secret
*/
router.get('/',function(req,res){
   User.find({},
    function(err, users) {
        if (err)
            return res.status(500).send("There was a problem finding the user");
        res.status(200).send(users);
    }) 
});

module.exports = router;
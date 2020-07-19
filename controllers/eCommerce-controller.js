
var express = require("express");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

var router = express.Router();

var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {


// --------------------------------------------------
// Goats Page
// --------------------------------------------------

    router.get('/products', function(req,res) {
        db.Goat.findAll({})
                .then(function(data){
                var goatObject = {
                    goats: data
                };
            return res.render('products', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/products", function(req, res) {
        db.Goat.create({

            goat_name: req.body.goat_name,
            goat_color: req.body.goat_color,
            goat_sex: req.body.goat_sex,
            goat_price: req.body.goat_price,
            picture_url: req.body.picture_url,
            goat_sold:false

            }).then(function(data) {

                res.redirect("/products");
            })
    });

// --------------------------------------------------
// Goats Catelog
// --------------------------------------------------

    router.get('/productsCat', function(req,res) {
        db.Goat.findAll({})
                .then(function(data){
                var goatObject = {
                    goats: data
                };
            return res.render('productsCat', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post('/productsCat/submit/:id', function(req,res,next){
        var id = req.params.id;
        
        res.redirect('/productsCat/' + id);
    });


// --------------------------------------------------
// Transaction Page
// --------------------------------------------------

    // Retreive goat data for transaction page
    router.get('/productsCat/:id', function(req,res,next){
        db.Goat.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(data){
            var goatObject = {
                goats: data
            };
            return res.render('transactions', goatObject);
            }).catch(function(err) {
                res.json(err)
        });
    });

    router.post("/memAddTrans", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address,
            UserId: 1

            }).then(function(data) {
               //res.redirect("/transactions");
               res.render('transactions',{output:data})
            })
    });

    router.post("/transDone", function(req, res) {
        db.Transaction.create({
            MemberId: req.body.MemberId,
            GoatId: 2
        }).then(function(data) {
                res.redirect("/cart");
        })
    });

    router.get('/cart', function(req,res,next){
        db.Transaction.findAll({
        })
        .then(function(data){
            var transObject = {
                transactions: data
            };
            return res.render('cart', transObject);
            }).catch(function(err) {
                res.json(err)
        });
    });


// --------------------------------------------------
// Members Page
// --------------------------------------------------

    router.get('/memDetails', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('memDetails', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/memDetails", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address

            }).then(function(data) {

                res.redirect("/memDetails");
            })
    });




// --------------------------------------------------
// blog Page
// --------------------------------------------------

    router.get('/blogs1', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('blogs1', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

    router.get('/blogs2', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('blogs2', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

    router.get('/blogs3', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('blogs3', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

    router.get('/blogs4', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('blogs4', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

// --------------------------------------------------
// support Page
// --------------------------------------------------

    router.get('/support', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('support', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


// --------------------------------------------------
// About Page
// --------------------------------------------------

    router.get('/about', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('about', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });



// --------------------------------------------------
// brands Page
// --------------------------------------------------

    router.get('/brands', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('brands', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

    



// // --------------------------------------------------
// // Landing Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/',function(req,res){
        db.Goat.findOne({
            where: {id: 2} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('index', goatOftheDay );
            }).catch(function(err) {
            res.json(err)


        });        
    });




// // --------------------------------------------------
// // apple Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/apple',function(req,res){
        db.Goat.findAll({
            where: {goat_sex: 'Apple'} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('apple', goatOftheDay );
            }).catch(function(err) {
            res.json(err)


        });        
    });



// // --------------------------------------------------
// // samsung Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/samsung',function(req,res){
        db.Goat.findAll({
            where: {goat_sex: 'Samsung'} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('samsung', goatOftheDay );
            }).catch(function(err) {
            res.json(err)


        });        
    });


// // --------------------------------------------------
// // google Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/google',function(req,res){
        db.Goat.findAll({
            where: {goat_sex: 'Google'} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('google', goatOftheDay );
            }).catch(function(err) {
            res.json(err)


        });        
    });



// // --------------------------------------------------
// // motorola Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/motorola',function(req,res){
        db.Goat.findAll({
            where: {goat_sex: 'Motorola'} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('motorola', goatOftheDay );
            }).catch(function(err) {
            res.json(err)


        });        
    });





// --------------------------------------------------
// Login Page
// --------------------------------------------------

    // Retreive User data for loginMems page
    router.get('/loginMems', function(req,res,next){
        db.User.findAll({
        })
        .then(function(data){
            var userObject = {
                users: data
            };
            return res.render('loginMems', userObject);
            }).catch(function(err) {
                res.json(err)
        });
    });

    router.post('/loginMems/submit/:email', function(req,res,next){
        var email = req.params.email;
        console.log("id is : " + email);
        console.log("............................." + email);
        res.redirect('/loginMems/' + email);
    });


    


// --------------------------------------------------
// Admin Page
// --------------------------------------------------

 router.get('/admins', function(req,res) {
        db.Transaction.findAll({
            // include: [
            //       {
            //         model: db.Goat,
            //         required: false
            //       },
            //       {
            //         model: db.Member,
            //         required: false
            //       }
            //     ]//,
            //where: {createdAt: {$between: [2017-08-20, 2017-08-30]}}

        }).then(function(data){
                var transObject = {
                    transactions: data
                };
            return res.render('admins', transObject);
            }).catch(function(err) {
            res.json(err)
        });
    });



    return router;

};

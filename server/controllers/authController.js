const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({
                    message: 'User Added Success'
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error'
                })
            })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({
        $or: [{
            name: username
        }]
    })
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        let token = jwt.sign({
                            name: user.name
                        }, 'verySecretValue', {
                            expiresIn: '1h'
                        })
                        res.json({
                            message: 'Login Succes',
                            token
                        })
                    } else {
                        res.json({
                            message: 'password does not matched'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No user found!'
                })
            }
        })
}

module.exports = {
    register, login
}
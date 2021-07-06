const db = require('../models/RegisteredUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
//allUsers
exports.getUser = async (req, res) => {
    try {

        if (req.headers.cookie == null) {
            res.satus(403).send('token not found')
            console.log('token not foundfghjk');
        }
        else {
            const token = (req.headers.cookie).split("=")[1];
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (er, data) => {
                if (er || data == undefined) {
                    res.json({ "message": 'jwt expired' })
                    console.log({ message: 'jwt expired' });
                }
                res.json({ message: 'this is secured page' })
                console.log(data);
            })
            // const Users = await db.find()
            //         res.send(Users)

        }
    }
    catch (err) {
        res.send(err)
        console.log('token not found');
    }
}
//addUsers
exports.addUsers = async (req, res) => {
    try {


        // bcrypt.hash(req.body.password, 10, async (er, data) => {
        //     if (er) {
        //         console.log(er);
        //     }
        //     const user = new db(
        //         {
        //             firstname: req.body.firstname,
        //             lastname: req.body.lastname,
        //             username: req.body.username,
        //             email: req.body.email,
        //             password: data
        //         })
        //     const userSave = await user.save();
        //     res.send(userSave)

        // })
        
        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(req.body.password, salt)
        const user = await new db({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: password
        })
        const userSave = await user.save();
        res.send(userSave)
    }
    catch (err) {
        res.json({ message: err })
    }
}


exports.loginUser = async (req, res) => {
    try {

        const user = await db.find({
            email: req.body.email
        })
        const token = jwt.sign({ user: user[0].email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15000' })
        res.cookie('token', token);

        if (user[0].email != req.body.email) {
            console.log('User not found');
        }
        else {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {

                if (result == true) {
                    res.json({ "message": "login successfully" });
                    console.log('login suucessfully');

                } else {
                    // res.redirect('/log');
                    console.log('Incorrect password');
                    res.json({ message: "incorrect password" })
                }
            });
        }
    }
    catch (err) {
        res.send(err)
    }
}


exports.updateUser = async (req, res) => {
    try {

        bcrypt.hash(req.body.password, 10, async (er, data) => {

            if (er) { console.log(er); }
            else {

                const user = await db.updateMany({
                    email: req.body.email
                }, {
                    $set: {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        email: req.body.email,
                        password: data
                    }
                })
                    .exec((err, dat) => {
                        if (err) {
                            res.send(err)
                            console.log(err)
                        }
                        else {
                            res.json({ "message": "User Updated Successfully" })
                            console.log(dat)
                        }
                    })
                console.log(user);

            }
        })

        // .exec((err, dat) => {
        //     if (err) {
        //         res.send(err)
        //         console.log(err)
        //     }
        //     else {
        //         res.json({ "message": "User Updated Successfully" })
        //         console.log(dat, user)
        //     }
        // })
    }
    catch (error) {
        console.log(error);
    }
}



exports.deleteUser = async (req, res) => {
    try {
        await db.deleteOne({
            email: req.body.email
        })
            .exec((err, data) => {
                if (err) {
                    res.send(err)
                    console.log(err)
                }
                else {
                    res.json({ "message": "User Deleled Successfully" })
                    console.log(data)
                }
            })
    }
    catch (error) {
        console.log(error);

    }

}
var userModel = require('../models/user.schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
module.exports = {



    signup: async (req, res) => {

        let data = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        }

        let object = new userModel(data)
        await object.save()
        let username = await userModel.findOne({ username: req.body.username })
        const token = jwt.sign({ _id: username._id.toString() }, 'secretsanta')
        username.tokens = username.tokens.concat({ token })
        await username.save()

        res.status(200).json({
            responseMessage: "Successfully Inserted",
            responseCode: 200,
            token: token
        })

    },

    signin: async (req, res) => {

        let username = await userModel.findOne({ username: req.body.username})

        if (username) {
            var hashedpassword = await bcrypt.compare(req.body.password, username.password)
            if (hashedpassword) {
                const token = jwt.sign({ _id: username._id.toString() }, 'secretsanta')
                username.tokens = username.tokens.concat({ token })
                await username.save()
                res.status(200).json({
                    responseMessage: "Logged In",
                    responseCode: 200,
                    role: username.role,
                    token: token
                })
            }
            else {
                res.status(404).json({
                    responseMessage: "Wrong Password",
                    responseCode: 404
                })
            }
        }
        else {
            res.status(404).json({
                responseMessage: "User Name Not Found",
                responseCode: 404
            })
        }

    },

    logout: async (req, res) => {

        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            })

            await req.user.save()
            res.status(200).json({
                responseMessage: "Logged Out",
                responseCode: 200
            })

        } catch (e) {

            res.status(404).json({
                responseMessage: "Problem Logging Out",
                responseCode: 404
            })

        }

    },

    logoutAll: async (req, res) => {

        try {
            req.user.tokens = []
            await req.user.save()
            res.status(200).json({
                responseMessage: "Logged out on all devices",
                responseCode: 200
            })
        } catch (e) {
            res.status(404).json({
                responseMessage: "Unable to Log Out",
                responseCode: 404
            })
        }
    },

    sendMailResetPassword: async (req, res) => {

        let user = await userModel.findOne({ username: req.body.username })

        if (user) {

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ijazh4051@gmail.com',
                    pass: 'zamzambiryani'
                }
            });


            var mailOptions = {
                from: 'ijazh4051@gmail.com',
                to: 'ijazhaider1001@gmail.com',
                subject: 'Reset Password',
                text: 'reset your password using http://localhost:3000/reset'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    },

    resetPassword:async(req,res)=>{

        let user=await userModel.findOne({username:req.body.username})

        user.password=req.body.password

        await user.save()

        res.status(200).json({
            responseMessage:"Password Reset"
        })
    }
}
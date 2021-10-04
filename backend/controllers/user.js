const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv/config')

exports.signup = ((req, res) => {
    const { fullName, password, email, Cpassword,securityAnswer} = req.body

    // if (!fullName || !password || !email || !Cpassword || !securityAnswer) {
    //     return res.status(422).json({error:"All fields are neccesary"})
    // }

    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                return res.status(422).json({ error: "Email already exists" })
            }
            const newUser = new User(req.body)

            newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
            newUser.Cpassword = bcrypt.hashSync(req.body.Cpassword, bcrypt.genSaltSync(10), null)
            newUser.save()
                .then(user => {
                    console.log(user)
                    res.status(200).json({ message: "Signup Successful" })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => console.log(err))

    // User.findOneAndUpdate(
    //     {
    //         email: email
    //     },
    //     {
    //         $push: {
    //             barChartData : [10, 20, 30]
    //         },
    //         $push: {
    //             pieChartData : [10, 20, 30]
    //         }
    //     }
    // )    
})

exports.signin = ((req, res) => {
    const { email, password } = req.body

    // if (!email, !password) {
    //     return res.status(422).json({ error: "All fields are necessary" })
    // }
    User.findOne({ email: email })
        .exec((err, user) => {
            if (err) {
                return res.status(422).json({ error: "Something went wrong" })
            }
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
                    const {_id,fullName,email}=user
                    res.status(200).json({ token, savedUser: { _id, fullName, email }, message:"Signed In Successfully" })
                }
                else {
                    return res.status(422).json({ message: "Invalid Password" })
                }
            }
            else {
                return res.status(422).json({ message: "Email id dont exist" })
            }
        })
})

const User = require('../models/user');

exports.getData = ((req, res) => {
    const { email } = req.body
    console.log(req.body,"req")
    User.findOne({ email: email })
    .then(userData => {
        console.log(userData)
        res.send({ 
            email:userData.email,
            fullName:userData.fullName,
            data1:userData.data1,
            data2:userData.data2

         })
    })
    .catch(err => {
        console.log(err);
    })
})
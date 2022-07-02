const UserSchema = require('../../../models/users');

class registerController {
    getIndex(req, res) {
        res.render('auth/register');
    }
    postIndex(req, res) {
        const addUser = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        addUser.save((err) => { 
            throw err
        })
        
    }

}


module.exports = new registerController();

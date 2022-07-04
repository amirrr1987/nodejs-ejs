const { validationResult } = require('express-validator');
const UserSchema = require('../../../models/users');

class registerController {
    getIndex(req, res) {
        res.render('auth/register', { errors: req.flash('errors') });
    }
    postIndex(req, res) {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            const errors = result.array();
            console.log(errors);
            req.flash('errors', errors);
            res.redirect('/auth/register');
        }

        else {
            const addUser = new UserSchema({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            addUser.save((err) => {
                if (err) {
                    console.log(err);
                }
            });
            res.redirect('/');
        }

    }
}

module.exports = new registerController();

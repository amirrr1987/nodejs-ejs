const { check } = require('express-validator');


class registerValidator {
    handel() {
        return [
            check('name')
                .isLength({ min: 3 })
                .withMessage('Name must be at least 3 characters long'),
            check('email')
                .isEmail()
                .withMessage('Email is not valid'),
            check('password')
                .isLength({ min: 6 })
                .withMessage('Password must be at least 6 characters long'),
        ]
    }
}

module.exports = new registerValidator();
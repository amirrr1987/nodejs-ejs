const { validationResult } = require("express-validator");
const UserSchema = require("../../../models/users");
const Recaptcha = require("express-recaptcha").RecaptchaV2;
const autoBind = require('auto-bind');

class registerController {
    constructor() {
      autoBind(this);
    this.setRecaptcha();
  }
  setRecaptcha() {
    this.recaptcha = new Recaptcha(
      "6LfgC8UgAAAAAMAvwNgTH6AjHcrMcgAa18XCM9a1",
      "6LfgC8UgAAAAABb1wt0zJsrnOibZ4plyhXaH1KEx",
      {
        hl: "fa",
      }
    );
  }
  getIndex(req, res) {
    res.render("auth/register", { errors: req.flash("errors"), recaptcha: this.recaptcha.render() });
  }
  postIndex(req, res) {
    this.recaptcha.verify(req, (err) => {
      if (err) {
        req.flash("errors", { msg: "Recaptcha is not valid" });
        res.redirect("/auth/register");
      } else {
        const result = validationResult(req);

        if (!result.isEmpty()) {
          const errors = result.array();
          console.log(errors);
          req.flash("errors", errors);
          res.redirect("/auth/register");
        } else {
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
          res.redirect("/");
        }
      }
    });
  }
}

module.exports = new registerController();

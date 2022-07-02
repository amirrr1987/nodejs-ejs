class loginController {
    getIndex(req, res) {
        res.render('auth/login');
    }
    postIndex(req, res) {
        console.log(req.body);
        res.json(req.body);
    }
}

module.exports = new loginController();

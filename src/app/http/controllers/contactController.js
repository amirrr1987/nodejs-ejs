class homeController {
    index(req, res) {
        res.render('contact');

    }
}
module.exports = new homeController();
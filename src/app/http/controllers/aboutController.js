class homeController {
    index(req, res) {
        res.render('about');

    }
}
module.exports = new homeController();
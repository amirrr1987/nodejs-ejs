class homeController {
    index(req, res) {
        res.render('gallery');

    }
}
module.exports = new homeController();
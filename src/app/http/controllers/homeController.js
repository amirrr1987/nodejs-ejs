class homeController {
    getIndex(req, res) { 
        res.render('index');
    
     }
}
module.exports = new homeController();
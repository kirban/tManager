module.exports.index = function(req, res, next) {
    res.render('index', { title: 'tManager Main Page' });
};

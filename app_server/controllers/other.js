// контроллер для второстепенных страниц
module.exports.signup = function(req, res, next) {
    res.render('signup', { title: 'Регистрация' });
};
module.exports.forgot = function(req, res, next) {
    res.render('forgot', { title: 'Вспомнить пароль' });
};
module.exports.about = function(req, res, next) {
    res.render('about', { title: 'О приложении' });
};
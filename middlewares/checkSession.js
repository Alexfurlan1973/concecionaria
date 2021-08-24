module.exports = function (req, res, next) {
    if (!req.session.usuario) {
      res.redirect('/admin/login');
    }
    next();
  };
  
/*
  req.session.destroy((err) => {
    //faz o redirect
    })
    */
exports.dashboard = (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/');
  }
  res.render('dashboard');
};

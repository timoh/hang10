
/*
 * GET home page.
 */

exports.show = function(req, res){
  res.render('index', { title: 'Hang10.app Home' });
};
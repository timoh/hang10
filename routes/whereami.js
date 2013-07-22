
/*
 * GET simple location app page.
 */

exports.show = function(req, res){
  res.render('whereami', { title: 'Hang10.app WhereAmI simple location app' });
};
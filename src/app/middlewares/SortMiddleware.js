module.exports = function SortMiddleware(req, res, next) {
  res.locals.sort = {
    enabled: false,
    type: 'default',
  };
  if (req.query.hasOwnProperty('sort')) {
    // res.locals.sort.enabled=true;
    // res.locals.sort.type=req.query.type;
    // res.locals.sort.column=req.query.column;
    //cach viet 2
    Object.assign(res.locals.sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    });
  }
  next();
};

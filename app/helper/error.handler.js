export default (err, req, res, next) => {
  if (err.httpStatus === 500) {
    console.error(null, err);
  }
  // err.httpStatus : 400, 404, 500…
  return res.status(err.httpStatus).json({ error: err.message });
};

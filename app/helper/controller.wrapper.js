export default (controller) => async (req, res, next) => {
  try {
    console.log("wrapperOK", req);
    await controller(req, res, next);
  } catch (err) {
    console.log("wrapperHS", err);
    next(err);
  }
};

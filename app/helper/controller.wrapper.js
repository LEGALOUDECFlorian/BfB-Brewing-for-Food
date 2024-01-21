export default (controller) => async (req, res, next) => {
  try {
    console.log("wrapperOK");
    await controller(req, res, next);
  } catch (err) {
    console.log("wrapperHS");
    next(err);
  }
};

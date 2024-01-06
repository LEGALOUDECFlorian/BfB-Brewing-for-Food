export default (controller) => async (request, response, next) => {
  try {
    await controller(request, response, next);
  } catch (err) {
    console.log(err);
    // Si une erreur est survenue, on renvoie une erreur 500
    return response.status(500).json({ error: "Internal server error" });
  }
};

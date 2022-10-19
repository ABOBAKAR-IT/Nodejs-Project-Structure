const {
  addService,
  findService,
  updateService,
  deleteService
} = require("../3-services/UserService");



module.exports.add = async (req, res) => {
  try {
    addService(req.body);
    res.status(200).send(true);
  } catch (error) {
    console.log(error);
    res.status(404).send(false);
  }
};

module.exports.find = async (req, res) => {
  try {
    const result = await findService();
    res.send(result);
  } catch (error) {}
};
module.exports.update = async (req, res) => {
  try {
    const result = await updateService(req.body);
    if (result.acknowledged) {
      res.send(true);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
    res.send(false);
  }
};
module.exports.dlete = async (req, res) => {
  try {
    const result = await deleteService(req.body);
    if (result.acknowledged) {
      res.send(true);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
    res.send(false);
  }
}

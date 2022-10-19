const User = require("../4-model/user_model");

module.exports.addService = async (body) => {
  const {
    email,
    password,
    username,
    role,
    ph_number,
  } = body;
  const user = new User({
    email: email,
    password: password,
    role: role,
    username: username,
    ph_number: ph_number
  });
  user.user_id = user._id
  const userData = await user.save();

};
module.exports.findService = async (body) => {
  const {
    email,
    password
  } = body;
  try {
    const user_data = await User.find({
      email: email,
      password: password
    }).exec();


    return user_data
  } catch (error) {
    console.log(error);
  }



};

module.exports.updateService = async (body) => {
  const {
    email,
    password
  } = body;
  return await User.updateOne({
    email: email
  }, {
    password: password
  }).exec();
};
module.exports.deleteService = async () => {
  return await User.deleteOne({user_id})
 
};

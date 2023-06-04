const User = require('../model/userModel')

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

 const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

 const saveUser = async (req, res) => {
  const {name, email, password} = req.body;
  const newUser = new User({name, email, password});

  try{
    newUser.save();
    res.send("user add success");
  }catch(error){
    return res.status(400).json({message: error});
  }
}

 const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    )
    res.status(200).json(updateduser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

 const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id })
    res.status(200).json(deleteduser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getUserById, getUsers, updateUser, deleteUser, saveUser
}
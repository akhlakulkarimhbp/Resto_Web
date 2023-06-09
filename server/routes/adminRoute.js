const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')
const Admin = require("../model/adminModel");


router.get("/users", userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.saveUser);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);



router.post("/login-admin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.find({ email, password });
    if (admin.length > 0) {
      const currentAdmin = {
        name: admin[0].name,
        email: admin[0].email,
        _id: admin[0]._id,
      };
      res.send(currentAdmin);
    } else {
      return res.status(400).json({ message: "admin login failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});


module.exports = router;



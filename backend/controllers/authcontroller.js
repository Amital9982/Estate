import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const UserRegister = async (req, res, next) => {
  try {
    const { username, name, email, mobile, password } = req.body;
    if (!username || !name || !email || !mobile || !password) {
      res.send({
        msg: "fill all the parameters",
      });
    } else {
      const hashPassword = bcrypt.hashSync(password, 10);
      const newUser = new User({
        username: username,
        name: name,
        email: email,
        mobile: mobile,
        password: hashPassword,
      });
      await newUser.save();

      res.send({
        success: true,
        msg: "user created successfully",
        newUser,
      });
    }
  } catch (err) {
    next(err);
  }
};

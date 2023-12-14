import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const UserRegister = async (req, res) => {
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
    console.log(err);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send({
      msg: "fill all the parameters",
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send("user not found");
  }
  const match = bcrypt.compare(password, user.password);
  if (!match) {
    res.send("incorrect password");
  }
};

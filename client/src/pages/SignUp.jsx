import React from "react";

const SignUp = () => {
  return <div>
    <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form className="flex flex-col gap" >
      <input type="text" placeholder="username"
        className="border p-3 rounded-lg" id="username" />
      <input type="email" placeholder="email"
        className="border p-3 rounded-lg" id="email" />
      <input type="password" placeholder="password"
        className="border p-3 rounded-lg" id="username" />
      <input type="password" placeholder="confirm password"
        className="border p-3 rounded-lg" id="username" />

    </form>

  </div>;
};

export default SignUp;

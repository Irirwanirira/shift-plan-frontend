import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../components/input";
import Button from "../../../components/button";

function ConfirmPassword() {
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  console.log(input);
  const validateInput = (e) => {};
  return (
    <div className="flex w-full">
      <div className="bg-[#032D7C] w-1/2 h-[100vh]  ">
        <img
          className="w-[50%] mt-[6rem] ml-[8rem] "
          src="/loginImage.png"
          alt="man on computer"
        />
      </div>

      <div className="bg-[#EEEEEE] w-1/2">
        <div className="w-1/5 p-2 ">
          <img src="/logo.jpg" alt="Logo" />
        </div>

        <div className="flex flex-col justify-center mt-[7rem] ml-[12rem] w-[50%]">
          <div className="pb-3">
            <h1 className="pb-1 text-xl font-bold">Reset Password</h1>
          </div>
          <div className="mb-10" />

          <form>
            <div className="input-container">
              <Input
                placeholder="New password"
                name="password"
                validator={{ required: true }}
                onChange={onInputChange}
                value={input.password}
                type="password"
              />
              {error.password && <span className="err">{error.password}</span>}
            </div>
            <div className="mb-7" />

            <div className="input-container">
              <Input
                placeholder="Confirm Password"
                name="confirmPassword"
                validator={{ required: true }}
                onChange={onInputChange}
                value={input.confirmPassword}
                type="password"
              />
            </div>
            {error.confirmPassword && (
              <span className="err">{error.confirmPassword}</span>
            )}
            <div className="mb-7" />

            <Button
              width="text-white py-[0.7rem] w-full bg-[#032D7C]"
              type="submit"
              label="Reset"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPassword;

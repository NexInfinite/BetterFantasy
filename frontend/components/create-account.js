import Link from "next/link";
import { useState } from "react";

export default function CreateAccountForm() {
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  const inputClass = "w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm";

  function validateInputs() {
    let errors = {};

    // Email Validation
    if (!email)
      errors.email = "Email is required";
    else if (!email.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,5}$"))
      errors.email = "Email must be in form user@domain.com";

    // Username Validation
    if (!username)
      errors.username = "Username is required";
    else if (!username.match("^[A-z]{3,15}$"))
      errors.username = "Username must be between 3 and 15 characters";

    // Password Validation
    if (!password)
      errors.password = "Password is required";
    else if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*_=+-]).{8,16}$"))
      errors.password = "Password must be 8-16 characters, contain uppercase characters, and contain special characters";
    else if (!confirmPassword)
      errors.password = "Please enter your password again";
    else if (confirmPassword != password)
      errors.password = "Passwords do not match"

    setErrors(errors);
  }

  async function onSubmit(event) {
    event.preventDefault();

    // Validate inputs and send a request if no errors, update errors if request not valid
    validateInputs();
    if (Object.keys(errors).length === 0) {  // This is the main reason i hate js
      console.log(process.env.API_ADDR)
      const response = await fetch(`${process.env.API_ADDR}/create-account`);
      console.log(response);
    }
  }

  return (
    <div className="flex w-full justify-center mt-6 font-theme-regular">
      <div className="w-10/12 max-w-xl bg-white rounded-lg shadow-xl border-slate-100 border-solid border-2 p-10 bg-main">
        <form onSubmit={onSubmit}>
          {/* Email Input */}
          <label htmlFor="email" className="block text-main text-lg font-bold mb-2">
            Email
            {"email" in errors && <span className="block text-red-900 text-xs italic font-bold md:text-sm">{errors.email}</span>}
          </label>
          <input
            id="email"
            type="text"
            className={inputClass + ("email" in errors && " ring-red-900 ring-4")}
            placeholder="email@domain.com"
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Username Input */}
          <label htmlFor="username" className="block text-main text-lg font-bold mb-2 mt-2 md:mt-6">
            Username
            {"username" in errors && <span className="block text-red-900 text-xs italic font-bold md:text-sm">{errors.username}</span>}
          </label>
          <input
            id="username"
            type="text"
            className={inputClass + ("username" in errors && " ring-red-900 ring-4")}
            placeholder="your username"
            onChange={(e) => setUsername(e.target.value)} 
          />

          {/* Password Input */}
          <div className="grid gap-x-8 grid-cols-1 md:gap-y-2 md:grid-cols-2">
            <div>
              <label htmlFor="password" className="block text-main text-lg font-bold mb-2 mt-2 md:mt-6">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={inputClass + ("password" in errors && " ring-red-900 ring-4")}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            {"password" in errors && <span className="block text-red-900 text-xs italic font-bold col-span-max pt-2 md:text-sm md:pt-0 md:hidden">{errors.password}</span>}

            <div>
              <label htmlFor="confirm_password" className="block text-main text-lg font-bold mb-2 mt-2 md:mt-6">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                type="password"
                className={inputClass + ("password" in errors && " ring-red-900 ring-4")}
                placeholder="password (again)"
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
            {"password" in errors && <span className="block text-red-900 text-xs italic font-bold col-span-max pt-2 md:text-sm md:pt-0">{errors.password}</span>}
          </div>

          {/* Login Button/Forgot Password */}
          <div className="flex items-center justify-between mt-6">
            <button
              className="transition-all ease-in duration-400 ring-2 ring-inset ring-main text-main font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline text-sm md:text-md hover:text-white hover:bg-main"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline underline text-xs sm:text-sm text-main hover:decoration-2"
              href="/login"
              scroll={false}
            >
              Already A Member?
            </Link>
          </div>
        </form> 
      </div>
    </div>
  )
};

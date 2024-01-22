import Link from "next/link";
import { useState } from "react";

export default function CreateAccountForm() {
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

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

    // Password 1 Validation
    if (!password)
      errors.password = "Password is required";
    else if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*_=+-]).{8,16}$"))
      errors.password = "Password must contain at least 1 uppercase characters, 1 lower case character, 1 special characters, and be between 8 and 16 characters long";

    // Password Confirm Validation
    if (!confirmPassword)
      errors.confirmPassword = "Please enter your password again";
    else if (confirmPassword != password)
      errors.confirmPassword = "Passwords do not match"

    console.log(errors)
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log(email, username, password, confirmPassword);
    validateInputs();
  }

  return (
    <div className="flex w-full justify-center mt-6 font-theme-regular">
      <div className="w-10/12 max-w-xl bg-white rounded-lg shadow-xl border-slate-100 border-solid border-2 p-10 bg-main">
        <form onSubmit={onSubmit}>
          {/* Email Input */}
          <label htmlFor="email" className="block text-main text-lg font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
            placeholder="email@domain.com"
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Username Input */}
          <label htmlFor="username" className="block text-main text-lg font-bold mb-2 mt-6">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
            placeholder="your username"
            onChange={(e) => setUsername(e.target.value)} 
          />

          {/* Password Input */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label htmlFor="password" className="block text-main text-lg font-bold mb-2 mt-6">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-main text-lg font-bold mb-2 mt-6">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                type="password"
                className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
                placeholder="password (again)"
                required="required"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
                title="Password must include at least 1 uppercase character, 1 lowercase character, 1 number and 1 symbol. This must be between 8 and 16 characters"
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
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

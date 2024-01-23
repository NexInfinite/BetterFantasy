import Link from "next/link";
import { useState } from "react";

export default function LoginForm()  {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
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

    // Password Validation
    if (!password)
      errors.password = "Password is required";

    setErrors(errors);
  }

  async function onSubmit(event) {
    event.preventDefault();
    validateInputs();
    console.log(errors);
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
            type="email"
            className={inputClass + ("email" in errors && " ring-red-900 ring-4")}
            placeholder="email@domain.com"
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Password Input */}
          <label htmlFor="password" className="block text-main text-lg font-bold mb-2 mt-6">
            Password
            {"password" in errors && <span className="block text-red-900 text-xs italic font-bold md:text-sm">{errors.password}</span>}
          </label>
          <input
            id="password"
            type="password"
            className={inputClass + ("password" in errors && " ring-red-900 ring-4")}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)} 
          />

          {/* Login Button/Forgot Password */}
          <div className="flex items-center justify-between mt-6">
            <button
              className="transition-all ease-in duration-400 ring-2 ring-inset ring-main text-main font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline text-sm md:text-md hover:text-white hover:bg-main"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline underline text-xs sm:text-sm text-main hover:decoration-2"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>
        </form> 

        {/* Or */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        {/* Create Account */}
        <div className="text-center">
          <p>New to Better Fantasy?</p>
          <Link href="/create-account" scroll={false}>
            <button className="transition-all ease-in duration-400 ring-2 ring-inset ring-main text-main font-bold mt-2 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline text-sm md:text-md hover:text-white hover:bg-main">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

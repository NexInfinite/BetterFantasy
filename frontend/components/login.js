import Link from "next/link";

export const LoginForm = () => (
  <div className="flex w-full justify-center mt-6 font-theme-regular">
    <div className="w-10/12 max-w-xl bg-white rounded-lg shadow-xl border-slate-100 border-solid border-2 p-10 bg-main">

      <form>
        {/* Email Input */}
        <label htmlFor="email" className="block text-main text-lg font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
          placeholder="email@domain.com"
          pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Invalid Email Address"
          required="required"
        />

        {/* Password Input */}
        <label
          htmlFor="password"
          className="block text-main text-lg font-bold mb-2 mt-6"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full text-sm appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 italic placeholder:text-neutral-400 placeholder:text-sm"
          placeholder="password"
          required="required"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          title="Password must include at least 1 uppercase character, 1 lowercase character, 1 number and 1 symbol. This must be between 8 and 16 characters"
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

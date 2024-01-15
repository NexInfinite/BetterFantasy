export const LoginForm = () => (
  <div className="flex w-full justify-center mt-6 font-theme-regular">
    <form className="w-10/12 max-w-xl bg-white rounded-lg shadow-xl border-slate-100 border-solid border-2 py-12 px-10 bg-main">
      <label htmlFor="email" className="block text-main text-lg font-bold mb-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="w-full text-md appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 placeholder:italic placeholder:text-neutral-400 placeholder:text-sm"
        placeholder="email@domain.com"
        pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        title="Invalid Email Address"
      />

      <label
        htmlFor="password"
        className="block text-main text-lg font-bold mb-2 mt-6"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        className="w-full text-md appearance-none rounded-md ring-2 ring-inset ring-main bg-white py-2 px-3 leading-tight text-main focus:outline-0 placeholder:italic placeholder:text-neutral-400 placeholder:text-sm"
        placeholder="password"
      />

      <div className="flex items-center justify-between mt-6">
        <button
          className="ring-2 ring-inset ring-main text-main font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline text-xs sm:text-md"
          type="submit"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline underline text-xs sm:text-sm text-main"
          href="/forgot-password"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
);

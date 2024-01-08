
export const LoginForm = () => (
  <div className="flex w-full justify-center mt-6 font-theme-regular">
    <form className="w-10/12 max-w-lg bg-background-color rounded-lg shadow-xl py-6 px-10 bg-white">
        <label htmlFor="email" className="block text-main text-lg font-bold mb-2">Email</label>
        <input id="email" type="email" className="w-full text-md appearance-none rounded border py-2 px-3 leading-tight text-slate-500 focus:outline-accent" placeholder="email@domain.com" pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" title="Invalid Email Address"/>

        <label htmlFor="password" className="block text-main text-lg font-bold mb-2 mt-6">Password</label>
        <input id="email" type="password" className="w-full text-md appearance-none rounded border py-2 px-3 leading-tight text-slate-500 focus:outline-accent" placeholder="password" />

        <div class="flex items-center justify-between mt-6">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs sm:text-md" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-xs sm:text-sm text-blue-500 hover:text-blue-800" href="/forgot-password">
            Forgot Password?
          </a>
        </div>
    </form>
  </div>
)
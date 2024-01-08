import Layout from "@/components/layout"
import {LoginForm} from "@/components/login"

export default function Login() {
    return (
      <Layout title="Login" description="Login or create an account!">
        <div className="h-50 w-full flex flex-col justify-center">
          <div>
            <div id="page-heading" className="text-center">
              <h1 className="text-6xl text-main font-theme-bold">Login</h1>
              <h2 className="text-xl text-dark-text font-theme-regular">Welcome back</h2>
            </div>
            <LoginForm />
          </div>
        </div>
      </Layout>
    )
  }
  
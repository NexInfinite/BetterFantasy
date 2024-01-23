import Layout from "@/components/layout";
import LoginForm from "@/components/login";

export default function Login() {
  return (
    <Layout title="Login" description="Login back in!">
      <div id="page-heading" className="text-center">
        <h1 className="text-4xl text-main font-theme-bold sm:text-6xl">Login</h1>
        <h2 className="text-m text-dark-text font-theme-regular px-8 sm:text-xl">
          Welcome back
        </h2>
      </div>
      <LoginForm />
    </Layout>
  );
}

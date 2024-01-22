import Layout from "@/components/layout";
import CreateAccountForm from "@/components/create-account";

export default function CreateAccount() {
  return (
    <Layout title="Create Account" description="Create an account today!">
      <div id="page-heading" className="text-center">
        <h1 className="text-6xl text-main font-theme-bold">Create Account</h1>
        <h2 className="text-xl text-dark-text font-theme-regular">
          Get started making your fantasy league
        </h2>
      </div>
      <CreateAccountForm />
    </Layout>
  );
}

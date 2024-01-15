import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout title="About" description="What about it? Oh, about Better Fantasy">
      <div id="page-heading" className="text-center">
        <h1 className="text-6xl text-main font-theme-bold">About</h1>
        <h2 className="text-xl text-dark-text font-theme-regular">
          Some Information
        </h2>
      </div>
    </Layout>
  );
}

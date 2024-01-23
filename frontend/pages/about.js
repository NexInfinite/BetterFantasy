import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout title="About" description="What about it? Oh, about Better Fantasy">
      <div id="page-heading" className="text-center">
        <h1 className="text-4xl text-main font-theme-bold sm:text-6xl">About</h1>
        <h2 className="text-m text-dark-text font-theme-regular px-8 sm:text-xl">
          Some Information
        </h2>
      </div>
    </Layout>
  );
}

import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout title="Home" description="Better F1 Fantasy Home!">
      <h1 className="text-4xl text-f1-red font-f1-bold sm:text-6xl">F1 Fantasy</h1>
      <h2 className="text-m text-dark-text font-f1-regular sm:text-xl">An Unofficial Fantasy League</h2>
    </Layout>
  )
}
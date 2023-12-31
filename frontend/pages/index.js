import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout title="Home" description="Better F1 Fantasy Home!">
      <div id="page-heading">
        <h1 className="text-4xl text-f1-red font-f1-bold sm:text-6xl">F1 FANTASY</h1>
        <h2 className="text-m text-dark-text font-f1-regular sm:text-xl">An Unofficial Fantasy League</h2>
      </div>
      <div id="how-it-works" className="pt-8">
        <h2 className="text-2xl text-dark-text font-f1-bold sm:text-3xl">HOW IT WORKS</h2>
        <div id="how-it-works-grid" className="pt-6 grid grid-cols-3 gap-y-3 justify-items-center max-w-xl">
          <span class="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl">1. </h3>
          </span>
        </div>
      </div>
    </Layout>
  )
}
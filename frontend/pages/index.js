import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout title="Home" description="Better F1 Fantasy Home!">
      <div id="page-heading">
        <h1 className="text-4xl text-f1-red font-f1-bold sm:text-6xl">F1 FANTASY</h1>
        <h2 className="text-m text-dark-text font-f1-regular sm:text-xl">An Unofficial Fantasy League</h2>
      </div>
      <div id="how-it-works" className="pt-4 sm:pt-12 px-6 grid grid-cols-1 justify-items-center">
        <h2 className="text-2xl text-dark-text font-f1-bold sm:text-3xl">HOW IT WORKS</h2>
        <div id="how-it-works-grid" className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-10 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl v-full">
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">1. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Create Your Free Account</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">Click the account icon on the top right of the navbar to get started, we only collect the data necessary to get your fantasy league setup</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">2. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Join or Make a League</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">Once your account has been created, join or make a league by pressing the "Leagues" link on the right of the navbar</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">3. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Customize the League</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">Our main goal of this fantasy is to give you the most control possible over how your league works, go into your league settings page to change how your league scores points, how to allocate points, which drivers are allowed, and much more!</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">4. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Create Your Team</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">Once your league has been customized, you can now create your team! Head to the "Teams" section on the navbar and follow the steps show</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">5. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Apply Boosts</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">Now you have your winning team, make it even better by adding boosts each weekend. You can add 1 boost per weekend, and each boost is added via the league settings.</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-f1-red font-f1-bold sm:text-4xl text-left">6. </h3>
            <h4 className="text-m text-dark-text font-f1-bold sm:text-2xl text-left">Share With Your Friends</h4>
            <p className="text-xs text-dark-text font-f1-regular sm:text-s text-left">You now have the best fantasy league going, now share it around and get your friends involved!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
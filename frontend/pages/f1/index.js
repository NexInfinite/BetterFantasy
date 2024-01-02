import HoverLink from "@/components/link"
import Layout from "@/components/layout"

export default function F1Home() {
  return (
    <Layout title="Home" description="Better Fantasy Home">
      <div id="page-heading" className="text-center">
        <h1 className="text-4xl text-main font-theme-bold sm:text-6xl">F1 FANTASY</h1>
        <h2 className="text-m text-dark-text font-theme-regular sm:text-xl">An Unofficial Fantasy League</h2>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="pt-4 sm:pt-12 px-6 grid grid-cols-1 justify-items-center">
        {/* Smaller Screen Card Title */}
        <h2 className="lg:hidden text-2xl text-dark-text font-theme-bold sm:text-3xl text-center">HOW IT WORKS</h2>

        <div id="how-it-works-grid" className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-10 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
          {/* Card Title */}
          <div className="hidden lg:block col-span-1 md:col-span-3">
            <div className="flex flex-auto flex-row items-center">
              <h2 className="text-2xl text-dark-text font-theme-bold sm:text-3xl whitespace-nowrap mr-4">HOW IT WORKS</h2>
              <div className="mt-2 h-2 w-full bg-slate-200 rounded-lg"></div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">1. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Create Your Free Account</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">Click the account icon on the top right of the navbar to get started, we only collect the data necessary to get your fantasy league setup</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">2. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Join or Make a League</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">Once your account has been created, join or make a league by pressing the "<HoverLink href="/leagues">Leagues</HoverLink>" link on the right of the navbar</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">3. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Customize the League</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">Our main goal of this fantasy is to give you the most control possible over how your league works, go into your league settings page to change how your league scores points, how to allocate points, which drivers are allowed, and much more!</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">4. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Create Your Team</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">Once your league has been customized, you can now create your team! Head to the "<HoverLink href="/teams">Teams</HoverLink>" section on the navbar and follow the steps show</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">5. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Apply Boosts</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">Now you have your winning team, make it even better by adding boosts each weekend. You can add 1 boost per weekend, and each boost is added via the league settings.</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-lg">
            <h3 className="text-xl text-main font-theme-bold sm:text-4xl text-left">6. </h3>
            <h4 className="text-m text-dark-text font-theme-bold sm:text-2xl text-left">Share With Your Friends</h4>
            <p className="text-xs text-dark-text font-theme-regular sm:text-s text-left">You now have the best fantasy league going, now share it around and get your friends involved!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
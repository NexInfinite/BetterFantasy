export default function Loading() {
  return (
    <div
      id="loading-screen"
      hidden={true}
      className="transition-opacity ease-out duration-400 opacity-0 absolute x-0 y-0 w-full h-full z-50 bg-gradient-to-tl from-slate-900 to-slate-800 overflow-hidden text-white text-bold font-theme-regular text-2xl"
    >
      <div className="h-full grid grid-cols-1 justify-items-center content-center">
        <div className="w-8/12">
          Loading...
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              id="loading-bar"
              className="transition-all ease-in duration-100 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

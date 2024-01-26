export default function Loading() {
  return (
    <div
      id="loading-screen"
      hidden={true}
      className="absolute z-50 w-full h-full overflow-hidden text-2xl text-white transition-opacity ease-out opacity-0 duration-400 x-0 y-0 bg-gradient-to-tl from-slate-900 to-slate-800 text-bold font-theme-regular"
    >
      <div className="grid content-center h-full grid-cols-1 justify-items-center">
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

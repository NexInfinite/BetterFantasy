export default function Footer() {
  return (
    <footer class="w-full fixed inset-x-0 bottom-0 bg-gray-800 rounded-t-lg flex justify-center">
      <div class="w-screen mx-0 max-w-screen-xl p-4 flex flex-wrap items-center justify-stretch lg:justify-between">
        <span class="text-sm text-gray-400 w-full lg:w-max text-center">©2023 <a href="https://julians.work" target="_blank" class="hover:underline">NexInfinite</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap justify-center w-full lg:w-max lg:items-center text-sm font-medium text-gray-400 mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="https://github.com/nexinfinite/betterf1fantasy" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
          </li>
          <li>
            <a href="/license" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="mailto:julianjones663@gmail.com" target="_blank" className="hover:underline me-4 md:me-6">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="https://fantasy.formula1.com/en/" target="_blank" className="hover:underline">Original Fantasy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
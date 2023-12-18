export default function Footer() {
  return (
    <footer class="fixed inset-x-0 bottom-0 bg-gray-800 rounded-t-lg">
      <div class="w-full mx-0 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2023 <a href="https://julians.work" class="hover:underline">NexInfinite</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="https://github.com/nexinfinite" class="hover:underline me-4 md:me-6">Github</a>
          </li>
          <li>
            <a href="/license" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="mailto:julianjones663@gmail.com" class="hover:underline me-4 md:me-6">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="https://fantasy.formula1.com/en/" class="hover:underline">Original F1 Fantasy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
} //TODO MOVE LINKS TO RIGHT
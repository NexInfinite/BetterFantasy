import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full fixed inset-x-0 bottom-0 bg-gray-800 rounded-t-lg flex justify-center">
      <div className="w-screen mx-0 max-w-screen-xl p-4 flex flex-wrap items-center justify-stretch lg:justify-between">
        <span className="text-sm text-gray-400 w-full lg:w-max text-center">©2023 <a href="https://julians.work" target="_blank" className="hover:underline">NexInfinite</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center w-full lg:w-max lg:items-center text-sm font-medium text-gray-400 mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6" scroll={false}>About</Link>
          </li>
          <li>
            <a href="https://github.com/nexinfinite/betterf1fantasy" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
          </li>
          <li>
            <Link href="/license" className="hover:underline me-4 md:me-6" scroll={false}>Licensing</Link>
          </li>
          <li>
            <a href="mailto:julianjones663@gmail.com" target="_blank" className="hover:underline me-4 md:me-6">Contact</a>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline me-4 md:me-6" scroll={false}>Privacy Policy</Link>
          </li>
          <li>
            <a href="https://fantasy.formula1.com/en/" target="_blank" className="hover:underline">Original Fantasy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
import Link from "next/link"
import { FaGraduationCap } from "react-icons/fa"

const Header = () => {
  return (
    <header className=" bg-gradient-to-bl from-sky-600/70 to-purple-600/70 sticky top-0 z-50 backdrop-blur-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href='/' className="flex items-center">
          <FaGraduationCap className="text-3xl mr-2" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-stone-300 via-white to-stone-300">MBSTU Admissions</h1>
        </Link>
        <nav className=" text-white font-semibold">
          <ul className="flex space-x-4">
            {/* <li>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li> */}
            <li>
              <Link href="/about" className="hover:text-gray-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/apply" className="hover:text-gray-900 transition-colors">
                Apply
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
              CR-X
            </span>
            <p className="text-gray-400 mt-2">Pushing the boundaries of technology</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CR-X. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


import React from 'react'

const Footer = () => {
  return (
    <footer className="  bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 text-center backdrop-blur-md">
      <div className="container mx-auto">
        <p className="mb-2">&copy; 2023 MBSTU Admission Management. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-sky-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-sky-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-sky-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
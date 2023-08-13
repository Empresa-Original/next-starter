import React, { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "About", href: "/about" },
  { name: "Advisors and Board Members", href: "/boards-and-advisory" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact Us", href: "/contact-us" },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="relative">
        {/* Background Image */}
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1747&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <nav className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src="https://nits.academy/wp-content/uploads/2021/04/cropped-cropped-cropped-nits_header_1-300x100.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white focus:outline-none focus:ring focus:ring-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-white transition duration-300 hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white transition duration-300 hover:text-gray-300"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-40 bg-white">
                <nav className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src="https://nits.academy/wp-content/uploads/2021/04/cropped-cropped-cropped-nits_header_1-300x100.png"
                        alt=""
                      />
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </nav>
              </div>
            )}
          </nav>
          {/* ... Content ... */}
          <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center p-6 lg:p-0">
            <h2 className="text-xl text-white">NEPALI INTERNATIONAL THEOLOGICAL SEMINARY</h2>
            <h1 className="mt-4 text-4xl font-bold text-white lg:text-6xl">NITS ACADEMY</h1>
            <p className="mt-4 max-w-lg text-lg text-white lg:text-xl">
              Offering all the classes entirely in the Nepali language by well-trained Nepali teachers.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
            >
              Apply Now
            </a>
            <div className="mt-4">
              <button
                onClick={() => {
                  window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
                }}
                className="text-white hover:underline"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of your content */}
    </div>
  )
}

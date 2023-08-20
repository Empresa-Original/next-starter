import React from "react"

const SectionSeven = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("assets/thumbnail_3.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto py-12 text-center">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Subscribe Card */}
          <div className="relative flex-1 rounded-md p-12 backdrop-blur-lg">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#FFC53A] to-[#ccc]/30"></div>
                <div className="relative z-10 mb-4 text-left">
                  <p className="font_desc font-[400] tracking-widest text-[#36348E]">SUBSCRIBE & FOLLOW US</p>
                  <p className="font_header my-4 text-5xl font-[900] text-black">Subscribe & Get More Information</p>
                  <p className="font_desc mt-4 tracking-wider text-gray-800">
                    Curabitur vehicula tincidunt sapien velcac dolore laudantium.
                  </p>
                </div>
              </div>
              <div className="flex-initial items-center">
                <div className="relative z-10 flex items-center justify-center">
                  <div className="rounded p-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="mb-4 h-12 w-72 bg-white/80 px-4 py-2 text-gray-600 placeholder:text-gray-600 hover:bg-white focus:bg-white focus:outline-none"
                    />
                    <button className="ml-4 h-12 bg-[#36348E] px-6 py-2 text-white hover:bg-[#36348E] hover:text-white hover:shadow-xl">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSeven

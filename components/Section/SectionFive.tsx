import React from "react"

const SectionFive = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-[-1] overflow-hidden"
        style={{ backgroundImage: "url('/assets/thumbnail_2.jpeg')", backgroundAttachment: "fixed" }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#36348E]/40" />

      <div className="container mx-auto py-12">
        <div className="flex justify-start">
          <div className="relative z-10 flex w-6/12 flex-col">
            <p className="font_desc text-xl font-[300] tracking-widest text-white">INTERESTED IN JOINING US?</p>
            <p className="font_header my-4 text-5xl font-[900] text-white">
              Join Us For Information About New Student Admissions
            </p>
            <p className="font_desc mt-4 text-sm font-[300] tracking-wider text-white">
              Donec diam augu consequat sit amet metusac bibendum mattis massa. Duis mollis ligula pretium consequat
              alique nibh purus fermentum mi bibendum bibendum mattis massa.
            </p>
            <a
              href="/"
              className="text-gray mt-8 inline-block max-w-[fit-content] bg-white px-6 py-3 font-semibold transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive

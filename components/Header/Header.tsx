/* eslint-disable tailwindcss/no-custom-classname */
import GridBox from "components/GridBox/GridBox"
import Nav from "components/Nav/Nav"

const Header = () => {
  return (
    <div className="bg-white">
      <header className="relative">
        {/* Video Embed */}
        <div className="relative h-[70vh] overflow-hidden">
          <iframe
          title="Background Video"
            className="absolute inset-0 h-full w-full object-contain overflow-hidden"
            src="https://player.vimeo.com/video/52411719?h=ca6101ffa0&color=ffffff&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1&controls=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{width: '1920px', height: '1080px'}}
          ></iframe>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-800 opacity-40"></div>
          <Nav />
          {/* ... Content ... */}
          <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center p-6 lg:p-0">
            <h2 className="font_desc text-sm tracking-[4px] text-white">NEPALI INTERNATIONAL THEOLOGICAL SEMINARY</h2>
            <h1 className="font_header mt-4 text-6xl font-[900] text-white lg:text-7xl">NITS ACADEMY</h1>
            <p className="font_desc mt-4 max-w-lg text-sm font-[300] leading-6 tracking-wider text-white lg:text-xl">
              Offering all the classes entirely in the Nepali language by well-trained Nepali teachers.
            </p>
            <a
              href="/"
              className="text-gray mt-8 inline-block bg-white px-6 py-3 font-semibold transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
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
        <GridBox />
      </header>

      {/* Rest of your content */}
    </div>
  )
}

export default Header

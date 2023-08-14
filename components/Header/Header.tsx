/* eslint-disable tailwindcss/no-custom-classname */
import GridBox from "components/GridBox/GridBox"
import Nav from "components/Nav/Nav"

const Header = () => {
  return (
    <div className="bg-white">
      <header className="relative">
        {/* Video Embed */}
        <div className="relative overflow-hidden h-[88vh]">
          <iframe
            title="Background Video"
            className="absolute inset-0 h-full w-full scale-125"
            src="https://www.youtube.com/embed/t51hOCs-Vog?controls=0&rel=0&playsinline=1&showinfo=0&enablejsapi=1&autoplay=1&modestbranding=1&mute=1"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Background Image */}
          {/* <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80")',
          }}
        > */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-800 opacity-40"></div>
          <Nav />
          {/* ... Content ... */}
          <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center p-6 lg:p-0">
            <h2 className="font_desc text-sm tracking-[4px] text-white">NEPALI INTERNATIONAL THEOLOGICAL SEMINARY</h2>
            <h1 className="font_header mt-4 text-6xl font-[900] text-white lg:text-7xl">NITS ACADEMY</h1>
            <p className="font_desc mt-4 max-w-lg text-sm leading-6 tracking-wider text-white lg:text-xl">
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

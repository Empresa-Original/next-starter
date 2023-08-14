import React from "react"

export const data = {
  image: "/assets/thumbnail_1.jpg", // Replace with the actual image path
  video: "https://youtu.be/1MTkZPys7mU?controls=0&autoplay=1", // Replace with your video link
  title: "WHY CHOOSE US",
  content: "Why NITS Academy",
  listItems: [
    "Graduate Programs",
    "Undergraduate Programs",
    "Doctoral Degrees",
    "International Hubs",
    "Alumni & Giving",
    "Global Students",
  ],
  stats: "76+ Years Of Experience • 25K+ Global Students",
  buttonText: "Read More",
}

const WhyChooseUs = () => {
  const statsParts = data.stats.split(" • ") // Split stats into parts
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left side */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {data.image && <img src={data.image} alt="Faculty" className="h-64 w-64 rounded-lg object-cover" />}
            {data.video && (
              <div className="absolute inset-0">
                <iframe
                  src={data.video}
                  title="Video"
                  className="h-64 w-64 rounded-lg object-cover"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-lg p-6">
          <p className="font_desc mt-4 text-lg font-[300] tracking-widest">{data.title}</p>
          <p className="font_header my-8 text-5xl font-[900] leading-4 text-black">{data.content}</p>
          <p className="font_desc text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua Ut enim ad minim veniam magna aliqua eiusmod tempor.
          </p>
          <ul className="mt-4 grid list-inside list-none grid-cols-2 gap-4">
            {data.listItems.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="font_desc text-sm">{item}</span>
              </li>
            ))}
            {data.listItems.slice(3, 6).map((item, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="font_desc text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            {/* <p className="font_desc text-xl text-gray-700">{data.stats}</p> */}
            <ul className="mt-4 flex list-inside list-none items-center space-x-10">
              {statsParts.map((stat, index) => {
                const [number, text] = stat.split(" ") // Split each part into number and text
                return (
                  <li key={index} className="flex flex-col space-x-2 text-gray-600">
                    <span className="text-4xl font-bold text-indigo-600">{number}</span>
                    <span>{text.length > 90 ? `${text.slice(0, 90)}...` : text}</span>
                  </li>
                )
              })}
            </ul>
            <button className="mt-6 bg-indigo-600 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-indigo-700">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

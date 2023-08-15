import Image from "next/image"
import React from "react"

// This is the section one for why choose us content
export const data = {
  media: [
    {
      type: "image",
      url: "/assets/thumbnail_2.jpeg",
      linkTo: "/faculty",
      linkName: "Faculty",
    },
    {
      type: "video",
      url: "/assets/thumbnail_3.jpeg",
    },
  ],
  title: "WHY CHOOSE US",
  subTitle: "Why NITS Academy",
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

const SectionOne = () => {
  const statsParts = data.stats.split(" • ") // Split stats into parts
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left side */}
        <div className="flex items-center justify-center gap-8">
          {/* Image */}
          {data.media && data.media.length > 0
            ? data.media.map((item) => (
                <div key={item.type} className="relative">
                  {item.type === "video" ? (
                    <div className="relative rounded-lg">
                      <Image
                        src={item.url}
                        width={250}
                        height={400}
                        alt="Faculty"
                        className="h-full w-full rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="none"
                          className="h-16 w-16"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0.5}
                            stroke="black"
                            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Image src={item.url} width={250} height={400} alt="Faculty" className="rounded-lg object-cover" />
                  )}

                  {item.linkTo && item.linkName ? (
                    <a
                      href={item.linkTo}
                      className="font_desc mt-6 flex items-center text-gray-800 transition duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                      Go to {item.linkName} &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              ))
            : null}
        </div>
        {/* Right side */}
        <div className="rounded-lg p-6">
          <p className="font_desc mt-4 text-lg font-[300] tracking-widest">{data.title}</p>
          <p className="font_header my-8 text-5xl font-[900] text-black">{data.subTitle}</p>
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
                const [number, ...rest] = stat.split(" ") // Split each part into number and the rest of the text
                const text = rest.join(" ") // Join the remaining parts to form the text
                return (
                  <li key={index} className="flex flex-col space-x-2 text-gray-600">
                    <span className="text-4xl font-bold text-indigo-600">{number}</span>
                    <span style={{marginLeft: 0}}>{text.length > 90 ? `${text.slice(0, 90)}...` : text}</span>
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

export default SectionOne

import Image from "next/image"
import React from "react"

const gridData = [
  {
    title: "What we offer",
    description: "We, as “Nepali International Theological Seminary (NITS), would like to inform you all...",
    link: "#",
  },
  {
    title: "Vision Statement",
    description: "Nepali pastors, leaders, and the Church across the globe will be trained and equipped to establish the kingdom of God by the power of the Holy Spirit and the guidance of shepherd Jesus Christ.",
    link: "#",
  },
  {
    title: "Image",
    description: "Description for item 3",
    imageUrl: "/assets/thumbnail_1.jpg",
    link: "#",
  },
  {
    title: "Mission Statement",
    description: "We stand to raise indigenous leaders for the global Nepali churches.",
    link: "#",
  },
]

const GridBox = () => {
  return (
    <div className="bg-[#343082] py-2">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gridData.map((item, index) => (
            <div key={index} className="bg-[#343082] p-2 text-white">
              {item.imageUrl ? (
                <Image className="w-full" src={item.imageUrl} alt={`Image ${index}`} width={200} height={174} />
              ) : (
                <>
                  <h3 className="text-xl font_header mt-2 font-semibold">{item.title}</h3>
                  <p className="text-sm font_desc font-[300] mt-4 tracking-wider">{item.description.length > 90 ? `${item.description.substring(0, 90)}...` : item.description}</p>
                  <a href={item.link} className="font_desc mt-6 flex items-center text-gray-300 transition duration-300 hover:scale-105 hover:-translate-y-1">
                    Read More&nbsp;
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridBox

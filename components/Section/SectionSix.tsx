import React from "react"
import Image from "next/image"

const SectionSix = () => {
  // Sample data for news posts
  const newsData = [
    {
      image: "/assets/thumbnail_4.jpeg",
      title: "Breaking News",
      date: "August 15, 2023",
      readTime: "5 min read",
    },
    {
      image: "/assets/thumbnail_2.jpeg",
      title: "New Study Reveals...",
      date: "August 16, 2023",
      readTime: "10 min read",
    },
    {
      image: "/assets/thumbnail_3.jpeg",
      title: "Upcoming Event",
      date: "August 17, 2023",
      readTime: "8 min read",
    },
    {
        image: "/assets/thumbnail_4.jpeg",
        title: "Campuses Open after Covid-19",
        date: "August 17, 2023",
        readTime: "8 min read",
      },
    // Add more news items as needed
  ]

  return (
    <div className="bg-gradient-to-br from-white to-white/70">
      {/* <div className="bg-gradient-to-br from-white to-[#FFC53A]/30"> */}
      <div className="container mx-auto py-12 text-center">
        <p className="font_desc text-black text-xl font-[300] tracking-widest">LATEST NEWS</p>
        <p className="font_header text-black my-4 text-5xl font-[900]">Stay Informed With Our Latest News</p>
        <div className="flex my-12 flex-col gap-8 md:flex-row">
          {newsData.map((news, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image src={news.image} alt="News Image" width={340} height={200} />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="mb-2 text-xl font-semibold text-white">{news.title}</p>
                  <p className="text-sm text-gray-400">{news.date}</p>
                  <div className="mt-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mr-1 h-4 w-4 text-gray-400"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-400">{news.readTime}</p>
                  </div>
                </div>
              </div>
              <a href="#" className="mt-2 text-black">
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-1 inline-block h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionSix

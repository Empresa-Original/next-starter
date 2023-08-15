import Image from "next/image"
import React from "react"

export const data = {
  title: "TO THE JOURNEY AHEAD",
  subTitle: "Gain Valuable Knowledge",
  listItems: [
    {
      title: "University Life",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>`,
      color: "#36348E"
    },
    {
      title: "Online Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`,
      color: "#FFC53A"
    },
    {
      title: "Campus Tours",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>`,
      color: "#2B7258"
    },
  ],
  gridItems: [
    {
      title: "Campus Tours",
      description:
        "Explore Our Campus\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/thumbnail_4.jpeg",
    },
    {
      title: "Online Education",
      description:
        "Learn Anywhere, Anytime\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/thumbnail_2.jpeg",
    },
  ],
}

const SectionTwo = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left side */}
        <div className="rounded-lg p-6">
          <p className="font_desc mt-4 text-lg font-[300] tracking-widest">{data.title}</p>
          <p className="font_header my-8 text-5xl font-[900] leading-4 text-black">{data.subTitle}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Each bullet point */}
            {data.listItems.map((item, index) => (
              <div key={index} className="flex space-x-4 rounded-lg bg-white p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200">
                  {/* Circular logo or avatar */}
                  <div dangerouslySetInnerHTML={{ __html: item.svgIcon }} className="h-6 w-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <p className="font_header text-xl">{item.title}</p>
                  <p className="font_desc mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 gap-4">
          {/* First grid */}
          <div className="col-span-2 flex flex-col justify-normal rounded-lg bg-white p-6 md:col-span-1">
            <div>
              <p className="mt-4 text-lg font-[600] tracking-widest">{data.gridItems[0].title}</p>
              <p className="font_desc my-4 text-sm font-[300] leading-4 text-black">{data.gridItems[0].description}</p>
            </div>
            <Image
              src={data.gridItems[0].image}
              alt={data.gridItems[0].title}
              width={600}
              height={400}
              className="rounded-lg object-fill"
            />
          </div>
          {/* Second grid */}
          <div className="col-span-2 rounded-lg bg-white p-6 md:col-span-1">
            <Image
              src={data.gridItems[1].image}
              alt={data.gridItems[1].title}
              width={600}
              height={350}
              className="mb-4 rounded-lg object-cover"
            />
            <div>
              <p className="mt-4 text-lg font-[600] tracking-widest">{data.gridItems[1].title}</p>
              <p className="font_desc my-4 text-sm font-[300] leading-4 text-black">{data.gridItems[1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo

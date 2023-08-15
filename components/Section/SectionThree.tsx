import Image from "next/image"
import React from "react"

export const data = {
  images: [
    {
      image: "/assets/thumbnail_1.jpg",
      title: "Student Community",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore earum deleniti, iure nemo eligendi, eos, ipsum aut sed itaque a error? Optio quasi numquam doloribus? Cum quasi voluptas commodi.",
    },
    {
      image: "/assets/thumbnail_2.jpeg",
      title: "Campus Tours",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore earum deleniti, iure nemo eligendi, eos, ipsum aut sed itaque a error? Optio quasi numquam doloribus? Cum quasi voluptas commodi.",
    },
    {
      image: "/assets/thumbnail_3.jpeg",
      title: "Online Learning",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore earum deleniti, iure nemo eligendi, eos, ipsum aut sed itaque a error? Optio quasi numquam doloribus? Cum quasi voluptas commodi.",
    },
    {
      image: "/assets/thumbnail_4.jpeg",
      title: "Discover Our Campus",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore earum deleniti, iure nemo eligendi, eos, ipsum aut sed itaque a error? Optio quasi numquam doloribus? Cum quasi voluptas commodi.",
    },
    // Add more images here
  ],
}

const SectionThree = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-4 gap-4">
        {data.images.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            style={{
              flex: "1 1 calc(25% - 1rem)",
              transition: "flex 0.3s, filter 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.flex = "2"
              e.currentTarget.style.filter = "brightness(0.7)"
              const overlay = e.currentTarget.querySelector(".overlay")
              if (overlay) overlay.style.transform = "translateY(0)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.flex = "1"
              e.currentTarget.style.filter = "brightness(1)"
              const overlay = e.currentTarget.querySelector(".overlay")
              if (overlay) overlay.style.transform = "translateY(100%)"
            }}
          >
            <Image src={item.image} alt={item.title} width={300} height={100} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden rounded-lg bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="overlay absolute w-full translate-y-full transform bg-gradient-to-t from-black to-transparent p-4 transition-transform duration-500">
                <div dangerouslySetInnerHTML={{ __html: item.icon }} className="mb-2 h-12 w-12 text-white" />
                <p className="font_desc mt-2 text-white">{item.title}</p>
                <p className="font_desc mt-2 text-sm text-white">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionThree

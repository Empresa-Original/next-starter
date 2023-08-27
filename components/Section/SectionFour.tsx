import Image from "next/image"
import React from "react"

export const data = {
  content: {
    title: "SPREAD OVER 25 CITIES IN 9 REGIONS",
    description: "We Are One Of The Largest University",
    bottomDescription: `Travisa caonsectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc, aliquam id nunc ac, convallis dictum nisi. Curabitur vehicula tincidunt sapien, vel fringilla neque iaculis feugiat purus caonsectetur adipiscing elit. Lorem ipsum dolor sit amet consec tetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam idnu acconvallis dictum nisi. Curabitur vehicula tinciduntc.`,
    media: {
      type: "png",
      src: "/assets/world_map.png",
    },
    testimonialData: [
      {
        stars: 5, // Rating out of 5
        avatar: "/assets/thumbnail_1.jpg",
        name: "John Doe",
        position: "Lead Developer",
        company: "Google LLC.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        stars: 4, // Rating out of 5
        avatar: "/assets/thumbnail_2.jpeg",
        name: "Jane Smith",
        position: "Architect",
        company: "IBM Inc.",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        stars: 4, // Rating out of 5
        avatar: "/assets/thumbnail_2.jpeg",
        name: "Armaan Husan",
        position: "Designer",
        company: "X Inc.",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        stars: 4, // Rating out of 5
        avatar: "/assets/thumbnail_2.jpeg",
        name: "Leo Xan",
        position: "Sr. Designer",
        company: "Apple Inc.",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      // Add more testimonial items as needed
    ],
  },
}

const TestimonialGrid = () => {
  return (
    <div className="relative flex justify-center gap-8">
      {data.content.testimonialData && data.content.testimonialData.length > 0
        ? data.content.testimonialData.map((item, index) => (
            <div key={index} className="relative rounded-lg bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center justify-start space-x-2">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                  {/* You can replace this with your actual avatar */}
                  <Image src={item.avatar} width={10} height={10} alt={item.name} className="h-10 w-10 rounded-full" />
                </div>
                {/* Name, Position, Company */}
                <div className="flex flex-col">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.position}, {item.company}
                  </p>
                </div>
              </div>
              {/* Stars */}
              <div className="mb-2 flex items-center space-x-1">
                {Array.from({ length: item.stars }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-[#FFC53A]"
                  >
                    {/* Add your star icon here */}
                    {/* For example, using a solid star */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2l2.928 8.072 7 1.348-5.3 4.722 1.254 7.774L12 18.01l-6.882 3.907 1.254-7.774-5.3-4.722 7-1.348L12 2z"
                    />
                  </svg>
                ))}
              </div>
              {/* Description */}
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))
        : null}
    </div>
  )
}

const SectionFour = (props: { options: any }) => {
  return (
    <div className="bg-[#36348E]">
      <div className="container relative z-10 mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <p className="font_desc text-xl font-[300] tracking-widest text-white">{data.content.title}</p>
            <p className="font_header my-4 text-5xl font-[900] text-white">{data.content.description}</p>
            <p className="font_desc mt-4 text-sm font-[300] tracking-wider text-white">
              {data.content.bottomDescription}
            </p>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-center">
            <Image src={data.content.media.src} alt="World Map" width={900} height={400} />
          </div>
        </div>
        {props.options && props.options.length > 0
          ? props.options.map((option: any, index: number) => (
              <React.Fragment key={index}>
                <hr className="my-8" />
                {option.item === "Testimonial" ? <TestimonialGrid /> : null}
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  )
}

export default SectionFour

import React from "react"

// Define an interface for the props
interface FooterProps {
  contact: string[]
  campus: string[]
  academics: string[]
  campusLife: string[]
  copyright: string
}

const contact = [
  "Kusunti, Lalitpur-13, Nepal",
  "GPO Box: 8975, EPC 669",
  "NOITS4International@gmail.com",
  "+977 9768429570 | +977 9843485480",
  "Facebook: NITS Seminary",
]

const campus = ["Programs", "Faculty", "About NITS"]

const academics = ["Programs", "Faculty", "Scholorships", "How to apply"]

const campusLife = ["Faculty", "Advisors and Board Members", "Contact Us"]

const copyright = "Copyright © 2023 NITS Academy. All rights reserved."

const Footer = () => {
  return (
    <footer className="bg-[#040335]">
      <div className="p-24 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="font_desc grid grid-cols-1 gap-8 font-[300] md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font_header mb-4 text-2xl font-[600] text-white">Contact Us</h3>
              {contact.map((item: string, index: number) => (
                <p className="leading-7 text-white" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font_header mb-4 text-2xl font-[600] text-white">Our Campus</h3>
              <ul className="mt-4">
                {campus.map((item: string, index: number) => (
                  <li className="leading-7 text-white" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font_header mb-4 text-2xl font-[600] text-white">Academics</h3>
              <ul className="mt-4">
                {academics.map((item: string, index: number) => (
                  <li className="leading-7 text-white" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font_header mb-4 text-2xl font-[600] text-white">Campus Life</h3>
              <ul className="mt-4">
                {campusLife.map((item: string, index: number) => (
                  <li className="leading-7 text-white" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="font_desc mt-8 border-t pt-4 text-center text-white">{copyright}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

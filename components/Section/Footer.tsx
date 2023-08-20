import React from "react"

// Define an interface for the props
interface FooterProps {
  contact: string[]
  campus: string[]
  academics: string[]
  campusLife: string[]
  copyright: string
}

const Footer: React.FC<FooterProps> = ({ contact, campus, academics, campusLife, copyright }) => {
  return (
    <footer className="bg-[#040335]">
      <div className="p-24 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="font_desc grid grid-cols-1 gap-8 font-[300] md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-2xl font_header font-[600] mb-4 text-white">Contact Us</h3>
              {contact.map((item: string, index: number) => (
                <p className="text-white leading-7" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font_header font-[600] mb-4 text-white">Our Campus</h3>
              <ul className="mt-4">
                {campus.map((item: string, index: number) => (
                  <li className="text-white leading-7" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font_header font-[600] mb-4 text-white">Academics</h3>
              <ul className="mt-4">
                {academics.map((item: string, index: number) => (
                  <li className="text-white leading-7" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font_header font-[600] mb-4 text-white">Campus Life</h3>
              <ul className="mt-4">
                {campusLife.map((item: string, index: number) => (
                  <li className="text-white leading-7" key={index}>
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

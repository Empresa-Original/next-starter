'use client'
import React from "react"
import Header from "components/header/header"
import Nav from "components/nav/nav"
import Footer from "components/Section/Footer"
import SectionFive from "components/Section/SectionFive"
import SectionOne from "components/Section/SectionOne"

function ProgramCard({ icon, title, description, linkText, lineClamp }) {

  return (
    <div className="mb-6 flex cursor-pointer flex-col items-center bg-white p-6 transition duration-300 hover:bg-[#343082] hover:text-white md:mx-4 md:w-1/3">
      <div dangerouslySetInnerHTML={{ __html: icon }} className="mb-4 h-12 w-12 text-center" />
      <div className="font_header mb-4 text-center text-xl font-semibold">{title}</div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <p className={`mb-4 line-clamp-${lineClamp}`}>{description}</p>
      <a
        href={`/` + title}
        className="font_desc mt-6 flex items-center transition duration-200 hover:-translate-y-1 hover:scale-105"
      >
        {linkText}&nbsp;
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
    </div>
  )
}

function ProgramsSection() {
  return (
    <div className="container mx-auto my-12 p-8 text-center">
      <p className="font_desc text-xl font-[300] tracking-widest text-[#36348E]">PROGRAMS WE OFFER</p>
      <h1 className="font_header my-4 mb-12 text-5xl font-[900] text-black">OUR PROGRAMS</h1>

      <div className="flex justify-center">
        {/* Certificate of Theology Program Card */}
        <ProgramCard
          icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>`}
          title="CERTIFICATE OF THEOLOGY (C.TH.)"
          description="NITS offers C. Th. fully in the Nepali language. This program is designed for those who have the vision to serve in the kingdom of God. We do not have any specific academic requirements for this course, but the candidate must have the ability to read and write in the Nepali language. This course’s minimum duration is two years, but the candidates may contact the Seminary to complete this course at their own pace. All the classes will be conducted online. A student must send a recommendation from a pastor or a representative."
          lineClamp={3}
          linkText="Read More"
        />

        {/* Bachelor of Theology Program Card */}
        <ProgramCard
          icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`}
          title="BACHELOR OF THEOLOGY (B.TH.)"
          description="NITS offers B.Th. in the Nepali language for all the Nepali-speaking pastors and emerging leaders who have the vision to serve, train, and equip Nepali churches across the globe. This course’s minimum duration is four years, but the candidates may contact the Seminary to complete this course at their own pace. The applicant must have a higher secondary education degree or C.Th. to apply for a B.Th. degree. All the classes will be conducted online."
          lineClamp={3}
          linkText="Read More"
        />

        {/* Master of Divinity Program Card */}
        <ProgramCard
          icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`}
          title="MASTER OF DIVINITY (M.DIV.)"
          description="We offer M.Div. classes fully in the Nepali language for all the students. This course’s minimum duration is three years, but the candidates may contact the Seminary to complete this course at their own pace. We require students to have B.Th. or equivalent degree to get enrolled for M.Div. classes. All the classes will be conducted online."
          lineClamp={3}
          linkText="Read More"
        />
      </div>
    </div>
  )
}

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
  title: "LET'S JOIN AND PROVE IT",
  subTitle: "Awards We Obtained",
  content: `
      Travisa consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc, aliquam id nunc ac, convallis dictum nisi. Curabitur vehicula tincidunt sapien, vel fringilla neque iaculis. Aliquam id nunc ac, convallis dictum nisi.
      
      PKM Awards
      Scientific Papers
      Debate Awards
      Network Security Awards
      Best University 2018 - 2020
      Best Facilities Campus
      Cleanest Campus
      Best Staff & Lecturers
    `,
  contactInfo: {
    phone: "+(62) 800-567-8990",
    email: "arizon@domain.com",
  },
  buttonText: "Read More",
}

function Programs() {
  return (
    <>
      <Nav />
      <Header />
      <ProgramsSection />
      <SectionFive layoutStyle="center" />
      <SectionOne props={data} />
      <Footer />
    </>
  )
}

export default Programs

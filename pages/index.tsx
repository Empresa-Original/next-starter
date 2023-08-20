import Header from "components/Header/Header"
import Footer from "components/Section/Footer"
import SectionFive from "components/Section/SectionFive"
import SectionFour from "components/Section/SectionFour"
import SectionOne from "components/Section/SectionOne"
import SectionSeven from "components/Section/SectionSeven"
import SectionSix from "components/Section/SectionSix"
import SectionThree from "components/Section/SectionThree"
import SectionTwo from "components/Section/SectionTwo"

export default function App() {
  const contactData = [
    "Kusunti, Lalitpur-13, Nepal",
    "GPO Box: 8975, EPC 669",
    "NOITS4International@gmail.com",
    "+977 9768429570 | +977 9843485480",
    "Facebook: NITS Seminary",
  ]

  const campusData = ["Programs", "Faculty", "About NITS"]

  const academicsData = ["Programs", "Faculty", "Scholorships", "How to apply"]

  const campusLifeData = ["Faculty", "Advisors and Board Members", "Contact Us"]

  const copyrightText = "Copyright © 2023 NITS Academy. All rights reserved."
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer
        contact={contactData}
        campus={campusData}
        academics={academicsData}
        campusLife={campusLifeData}
        copyright={copyrightText}
      />
    </>
  )
}

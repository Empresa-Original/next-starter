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
  return (
    <>
      <Header />
      <SectionOne props={{}} />
      <SectionTwo />
      <SectionThree />
      <SectionFour options={[{ item: "Testimonial" }]} />
      <SectionFive layoutStyle={""} />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  )
}

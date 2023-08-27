import React from "react"
import FlexBox from "components/FlexBox/FlexBox"
import Header from "components/Header/Header"
import Nav from "components/Nav/Nav"
import Footer from 'components/Section/Footer'
import SectionFive from "components/Section/SectionFive"
import SectionFour from "components/Section/SectionFour"
import SectionOne from "components/Section/SectionOne"
import SectionSeven from "components/Section/SectionSeven"
import SectionSix from "components/Section/SectionSix"

export const data = {
  media: [
    {
      type: "image",
      url: "/assets/thumbnail_4.jpeg",
      linkTo: "/faculty",
      linkName: "Faculty Members",
    },
    {
      type: "video",
      url: "/assets/thumbnail_2.jpeg",
    },
  ],
  title: "WHO WE ARE?",
  subTitle: "About NITS ACADEMY",
  listItems: [
    "Graduate Programs",
    "Undergraduate Programs",
    "Doctoral Degrees",
    "International Hubs",
    "Alumni & Giving",
    "Global Students",
  ],
  stats: "76+ Years Of Experience • 25K+ Global Students",
  buttonText: "Read More",
}

export const flexBoxData = [
  {
    title: 'Our Vision',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate facilis harum alias saepe porrounde eveniet explicabo illo, nemo vel accusantium dolore molestias.',
    color: '#36348E',
    textColor: '#fff'
  },
  {
    title: 'Our Mission',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio adipisci saepe, dolorum temporibusquia minus harum modi molestiae iure exercitationem?',
    color: '#FFC53A',
    textColor: '#2E2E2E'
  }
];

export const flexBoxProgressBarData = [
  {
    title: 'NITS Principle',
    progress: 90,
    animationDuration: 400,
    color: '#36348E',
  },
  {
    title: 'NITS Research',
    progress: 85,
    animationDuration: 400,
    color: '#36348E',

  },
  {
    title: 'NITS Technology',
    progress: 93,
    animationDuration: 400,
  },
]

const AboutPage = () => {
  return (
    <>
      <Nav />
      <Header />
      <SectionOne props={data} />
      <FlexBox data={flexBoxData} elements={flexBoxProgressBarData}/>
      <SectionFour options={[]}/>
      <div className="container mx-auto py-8">
        <div className="rounded-lg p-4">
          <h1 className="font_desc mt-4 text-lg font-[300] tracking-widest">ABOUT NITS ACADEMY</h1>
          <p className="font_header my-8 text-5xl font-[900] text-black">WHO WE ARE?</p>
          <p className="mb-4">
            Nepali International Theological Seminary exists to meet the needs of Nepali churches around the world. As
            we all faced Pandemic together, we realized that we could share our gifts and talents to beautify the church
            of Christ through the mediums available to us in the twenty-first century. Our focus is not simply limited
            to poke around the present struggles and challenges that the Nepali churches are facing but also to raise
            second-generation church leaders to carry on the mission of Christ wherever we are in the world. Where most
            people use modern technology for their selfish gain and evil purposes, we will use it selflessly and
            graciously to build each other in Christ.
          </p>
          <p className="mb-4">
            We also felt and experienced that it is extremely hard for pastors and leaders to leave their families and
            the church to pursue further theological education. The recent online posts and activities on social media
            gave us a clear picture of how false teaching and teachers are ravaging the Nepali churches worldwide.
            Therefore, we have prayerfully committed ourselves to serve the theological education at your study room no
            matter where you are in the world. We have craved the vision to see Nepali Church and the leaders being
            equipped to work in God’s vineyard and protect the church from false teaching and teachers. We are so
            excited and blessed to be a part of your ministry, church, and family.
          </p>
          <p className="mt-4">
            Grace and Peace
            <br />
            NITS
          </p>
        </div>
      </div>
      <SectionFive layoutStyle={"center"} />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  )
}

export default AboutPage

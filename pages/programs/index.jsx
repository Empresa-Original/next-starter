import React from "react"

const Programs = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-semibold">PROGRAMS OFFERED</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">CERTIFICATE OF THEOLOGY (C.TH.)</h2>
        <p>
          NITS offers C. Th. fully in the Nepali language. This program is designed for those who have the vision to
          serve in the kingdom of God. We do not have any specific academic requirements for this course, but the
          candidate must have the ability to read and write in the Nepali language. This course’s minimum duration is
          two years, but the candidates may contact the Seminary to complete this course at their own pace. All the
          classes will be conducted online. A student must send a recommendation from a pastor or a representative.
        </p>

        {/* C.Th. Curriculum */}
        <h3 className="mt-4 text-lg font-semibold">C.Th. Curriculum</h3>
        {/* First Semester */}
        <h4 className="text-md mt-2 font-semibold">First Semester</h4>
        <ul className="ml-4 list-disc">
          <li>Overview view of Old Testament</li>
          <li>Overview view of New Testament</li>
          <li>Life and Ministry of Jesus Christ</li>
          <li>Spiritual Formation</li>
          <li>Discipleship</li>
        </ul>

        {/* Second Semester */}
        <h4 className="text-md mt-2 font-semibold">Second Semester</h4>
        <ul className="ml-4 list-disc">
          <li>Leadership Role in the Church</li>
          <li>Bible Study Method</li>
          <li>Biblical Worship and liturgy</li>
          <li>Pastoral care and counseling</li>
          <li>Church Government</li>
        </ul>

        {/* Third Semester */}
        {/* ... Repeat the pattern for other semesters ... */}
      </section>

      {/* ... Repeat the pattern for other program sections ... */}

      {/* MASTER OF DIVINITY (M.DIV.) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">MASTER OF DIVINITY (M.DIV.)</h2>
        <p>
          We offer M.Div. classes fully in the Nepali language for all the students. This course’s minimum duration is
          three years, but the candidates may contact the Seminary to complete this course at their own pace. We require
          students to have B.Th. or equivalent degree to get enrolled for M.Div. classes. All the classes will be
          conducted online.
        </p>

        {/* M.Div. Curriculum */}
        <h3 className="mt-4 text-lg font-semibold">M.Div. Curriculum</h3>
        {/* First Year */}
        {/* ... Repeat the pattern for other years and semesters ... */}

        {/* Thesis Writing */}
        <p className="mt-4">Thesis Writing - Total = 3 credit hours</p>
      </section>
    </div>
  )
}

export default Programs

import React from 'react';

const FacultyPage = () => {
    const facultyMembers = [
        { name: "Pastor Mangal Man Maharjan", title: "Doctor of Ministry" },
        { name: "Dr. Shashi Bhattarai", title: "Doctor of Divinity" },
        { name: "Dr. Birendra Shrestha", title: "Ph.D. in Old Testament" },
        { name: "Dr. Pabitra Man Bhandari", title: "Ph.D. in Systematic Theology" },
        { name: "Dr. Olak Sunuwar", title: "Ph.D. in Christian Ethics" },
        { name: "Dr. Yubraj Rai", title: "Ph.D. in Missiology" },
        { name: "Dr. Debendra Niraula", title: "Ph.D. in Systematic Theology" },
        { name: "Dr. Kewal Bahadur Khadka (Benjamin)", title: "Ph.D. in Historical Theology" },
        { name: "Dr. Suman Gautam", title: "Doctor of Ministry" },
        { name: "Dr. Bhoj Raj Bhatta", title: "Ph.D. in New Testament" },
        { name: "Dr. Chhimi Dorje", title: "Ph.D. in Systematic Theology" },
        { name: "Rev. Dr. Nariram Luhar", title: "Ph.D. in Christian Leadership" },
        { name: "Dr. Sarad K.C.", title: "Th.D. in Intercultural Study / Ph.D. in Biblical Studies" },
        { name: "Dr. Aanand Tamang", title: "Doctor of Ministry" },
        { name: "Rev. Bharat Rasaili", title: "Ph.D. Candidate (Systematic Theology)" },
        { name: "Rev. Ramesh Bidari", title: "Ph.D. Candidate (Old Testament)" },
        { name: "Rev. Netra Lal Tamrakar", title: "Ph.D. Candidate" },
        { name: "Rev. Kirshna Philip", title: "Ph.D. Candidate (Systematic Theology)" },
        { name: "Rev. Bikal Shrestha", title: "Ph.D. Candidate (New Testament)" },
        { name: "Mr. Yam Tamang", title: "Doctor of Ministry Candidate" },
        { name: "Rev. Mani Koirala", title: "Th.M. in Systematic Theology" },
        { name: "Mr. Shushil Sharma", title: "MA in Theology and NT Theology" },
        { name: "Rev. Madhav Paudel", title: "Th.M. in Christian Education" },
        { name: "Rev. Rameshor Yadav", title: "Th.M. in New Testament" },
        { name: "Rev. Kusal Rai", title: "Th.M. in Historical Theology" },
        { name: "Rev. Narbu Sherpa", title: "Th.M. in Practical Theology" },
        { name: "Mr. Dil Kumar Shrestha", title: "Th.M. in Christian Education" },
        { name: "Rev. Yakub Gurung", title: "Th.M. in Systematic Theology" },
        { name: "Rev. Seth Tamang", title: "Th.M. in Practical Theology" },
        { name: "Rev. Kaji Gurung", title: "Th.M. in Historical Theology" },
        { name: "Mrs. Shobha Sunuwar", title: "Th.M. in Systematic Theology" },
        { name: "Ps. Dil Bahadur Tamang", title: "B.D. and M.Min." },
        { name: "Mr. Paul Rana", title: "M.Th. in New Testament" },
        { name: "Bandana Das Pariyar", title: "MTh Missiology" },
        { name: "Mr. Ram Sing Tamang", title: "Th.M. Candidate" },
        { name: "Mr. Subash Pradhan", title: "(M.Div), MBTS Master of Arts, Sociology" },
        { name: "Ps. Suman Rai", title: "M.Div." },
        { name: "Mrs. Madhuri Rana", title: "M.Div." },
        { name: "Ps. Mohan Chamlagai", title: "M.Div." },
        { name: "Mr. Santosh Kumhal", title: "M.Div." },
        { name: "Rev. Sanjay Gurung", title: "M.Div." },
        { name: "Rev. Gaurav Theeng", title: "M.Div." },
        { name: "Rev. Timothy K.C.", title: "M.Div." },
        { name: "Mrs. Monika Tamang", title: "M.Div." },
        { name: "Mr. Shankar Bahadur Tamang", title: "M.Div. M. Min., (MRE)" },
        { name: "Mrs. Man Kumari Tamang", title: "M.Div., M.Min, (MA)" },
        { name: "Rev. Ram Bahadur B.K.", title: "M.Div." },
        { name: "Rev. Adrian Anurodh Dewan", title: "Worship Leader and Youth Pastor" },
        // Add more faculty members here if needed
    ];

    return (
        <div className="p-4">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facultyMembers.map((faculty, index) => (
                        <div key={index} className="border border-gray-300 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">{faculty.name}</h3>
                            <p>{faculty.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="mb-8">
                {/* Add other sections for different categories of faculty */}
                {/* ... */}
            </section>
            
            {/* Continue with other sections as needed */}
        </div>
    );
};

export default FacultyPage;

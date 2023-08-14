function Resume() {
  const resume = {
    name: "Kunal Dhongade",
    interests: [
      "Drawing",
      "Photography",
      "Design",
      "Programming",
      "Computer Science",
    ],
    experience: [
      { year: 2012, company: "xyz", role: "smart contract Developer" },
      { year: 2015, company: "RURU", role: "NFT Developer" },
      { year: 2023, company: "SUBMUX", role: "Senior Blockchain Engineer" },
    ],
    education: ["BCA", "MCA"],
    skills: ["react js", "node js", "Solidity", "Blockchain"],
    extracurricular: ["Book Club", "Anime Weed", "Cycling Club"],
    // extracurricular: [],
  };

  return (
    <>
      <h1>Resume Builder</h1>
      <h2>{resume.name}</h2>

      {resume.experience.length == 0 ? null : (
        <>
          <h3>Experience</h3>
          <ul>
            {resume.experience.map((experience) => {
              return (
                <li>
                  <p>
                    {experience.role} at {experience.company}
                    in {experience.year}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {resume.education.length == 0 ? null : (
        <>
          <h3>Education</h3>
          <ul>
            {resume.education.map((education) => {
              return <li>{education}</li>;
            })}
          </ul>
          <h3>Skills</h3>
          <ul>
            {resume.skills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </>
      )}

      {resume.interests.length == 0 ? null : (
        <>
          <h3>Interests</h3>
          <ul>
            {resume.interests.map((interests) => {
              return <li>{interests}</li>;
            })}
          </ul>
        </>
      )}

      {resume.extracurricular.length == 0 ? null : (
        <>
          <h3>Extracurricular</h3>
          <ul>
            {resume.extracurricular.map((extra) => {
              return <li>{extra}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default Resume;

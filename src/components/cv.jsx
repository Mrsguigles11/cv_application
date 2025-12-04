import "../styles/cv.css";

function CV({ text }) {
  return (
    <div className="cv">
      <h2>{text["General Information"]["Name"]}</h2>
      <div className="gen_info_container">
        <div><img src="/email-outline.svg" alt="email_symbol"/>{text["General Information"]["Email"]}</div>
        <div><img src="/phone.svg" alt="email_symbol"/>{text["General Information"]["Phone Number"]}</div>
        <div><img src="/github.svg" alt="email_symbol"/>{text["General Information"]["Github"]}</div>
      </div>
      <h3>Profile</h3>
      <div className="profile">{text["General Information"]["Profile"]}</div>
      <h3>Education</h3>
      <div className="education">
      {Object.entries(text["Educational Experience"]["inputs"]).map(
        ([school, details]) => {
          return (
            <div className="school">
            <div>
              <h4 className="school_name">{details.schoolName}</h4>
              <i>{details.study}</i>
            </div>
            <div>{details.dateOfStudy}</div>
            </div>
          )
        }
      )}
      <div className="school">
            <div>
              <h4 className="school_name">{text["Educational Experience"]["currentInput"]["schoolName"]}</h4>
              <i>{text["Educational Experience"]["currentInput"]["study"]}</i>
            </div>
            <div>{text["Educational Experience"]["currentInput"]["dateOfStudy"]}</div>
            </div>
      </div>
      <h3>Practical Experience</h3>
      <div className="practical_experience">
      {Object.entries(text["Practical Experience"]["inputs"]).map(
        ([job, details]) => {
          return (
            <div className="job">
            <div>
              <h4 className="job_name">{details.company}</h4>
              <i>{details.position}</i>
            </div>
            <div>{details.date}</div>
            </div>
          )
        }
      )}
      <div className="job">
            <div>
              <h4 className="job_name">{text["Practical Experience"]["currentInput"]["company"]}</h4>
              <i>{text["Practical Experience"]["currentInput"]["position"]}</i>
            </div>
            <div>{text["Practical Experience"]["currentInput"]["date"]}</div>
            </div>
      </div>
      <h3>Additional Information</h3>
      <div className="additional_info">{text["Additional Information"]["Additional Information"]}</div>
    </div>

  );
}

export default CV;

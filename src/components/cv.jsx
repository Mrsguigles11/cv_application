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
              <div className="school_name">{school}</div>
              <i>{details[0]}</i>
            </div>
            <div>{details[1]}</div>
            </div>
          )
        }
      )}
      </div>
    </div>

  );
}

export default CV;

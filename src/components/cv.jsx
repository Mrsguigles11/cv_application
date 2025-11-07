import "../styles/cv.css";

function CV({ text }) {
  return (
    <div className="cv">
      <h2>{text["General Information"]["Name"]}</h2>
      <div className="details_container">
        <div>{text["General Information"]["Email"]}</div>
        <div>{text["General Information"]["Phone Number"]}</div>
        <div>{text["General Information"]["Github"]}</div>
      </div>
      <h3>Profile</h3>
      <div className="profile">{text["General Information"]["Profile"]}</div>
    </div>
  );
}

export default CV;

import "../styles/cv.css";

function CV({ text }) {
  return (
    <div className="cv">
      <h2>{text["General Information"]["Name"]}</h2>
      <div>{text["General Information"]["Email"]}</div>
      <div>{text["General Information"]["Phone Number"]}</div>
      <div>{text["General Information"]["Github"]}</div>
      <h3>Profile</h3>
      <div>{text["General Information"]["Profile"]}</div>
    </div>
  );
}

export default CV;

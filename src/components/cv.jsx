import "../styles/cv.css";

function CV({ text }) {
  return (
    <div className="cv">
      <h2>General Information</h2>
      <div>{text["General Information"]["Name"]}</div>
      <div>{text["General Information"]["Email"]}</div>
      <div>{text["General Information"]["Phone Number"]}</div>
    </div>
  );
}

export default CV;

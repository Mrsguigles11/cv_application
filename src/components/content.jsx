import { useState } from "react";
import InputSection from "./input_section";
import CV from "./cv";

function Content() {
  const [cvContent, setcvContent] = useState({
    "General Information": { 0: "", 1: "", 2: "" },
  });

  function handleChange(text, section, index) {
    let updatedObject = {...cvContent};
    updatedObject[section][index] = text;
    setcvContent(updatedObject);
  }

  return (
    <>
      <div className="inputs_container">
        <InputSection
          heading={"General Information"}
          inputs={["Name", "Email", "Phone Number"]}
          onChange={handleChange}
        />
      </div>
      <div className="cv_container">
        <CV text={cvContent}></CV>
      </div>
    </>
  );
}

export default Content;

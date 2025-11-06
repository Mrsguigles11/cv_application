import { useState } from "react";
import InputSection from "./input_section";
import CV from "./cv";

function Content() {
  const [cvContent, setcvContent] = useState({
    "General Information": { Name: "", Email: "", "Phone Number": "" },
  });

  function handleChange(text, section, input) {
    let updatedObject = { ...cvContent };
    updatedObject[section][input] = text;
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

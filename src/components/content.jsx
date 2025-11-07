import { useState } from "react";
import InputSection from "./input_section";
import CV from "./cv";

function Content() {
  const [cvContent, setcvContent] = useState({
    "General Information": { Name: "Harry Woodgate", Email: "harry@email.com", "Phone Number": "+447123456789", Github: "github.com/Mrsguigles11", Profile : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
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
          inputs={["Name", "Email", "Phone Number", "Github", "Profile"]}
          onChange={handleChange}
          content={cvContent}
        />
      </div>
      <div className="cv_container">
        <CV text={cvContent}></CV>
      </div>
    </>
  );
}

export default Content;

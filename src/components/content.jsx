import { useState } from "react";
import InputGeneralInfo from "./input_gen_info";
import InputEducationalExperience from "./input_edu_exp";
import CV from "./cv";

function Content() {
  const [cvContent, setcvContent] = useState({
    "General Information": {
      Name: "Harry Woodgate",
      Email: "harry@email.com",
      "Phone Number": "+447123456789",
      Github: "Mrsguigles11",
      Profile:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    "Educational Experience" : {
      inputs: {
        "Pembury" : ["Primary School", "2000 - 2010"]
      },
      "School Name" : "",
      Study : "", 
      "Date of Study" : ""
    }
  });

  function handleChange(text, section, input) {
    let updatedObject = { ...cvContent };
    updatedObject[section][input] = text;
    setcvContent(updatedObject);
  }

  function handleHeadingClick (index) {
  const collapsibleContents = document.querySelectorAll('.collapsible_content');
  const inputSections = document.querySelectorAll('.input_section');
  collapsibleContents[index].className === "collapsible_content hidden" ? collapsibleContents[index].className = "collapsible_content visible" : collapsibleContents[index].className = "collapsible_content hidden";
  inputSections[index].className === "input_section" ? inputSections[index].className = "input_section expanded" : inputSections[index].className = "input_section";
}

  return (
    <>
      <div className="inputs_container">
        <InputGeneralInfo
          heading={"General Information"}
          inputs={["Name", "Email", "Phone Number", "Github", "Profile"]}
          onChange={handleChange}
          headingClick={handleHeadingClick}
          content={cvContent}
        />
        <InputEducationalExperience 
          heading={"Educational Experience"}
          inputs={["School Name", "Study", "Date of Study"]}
          onChange={handleChange}
          headingClick={handleHeadingClick}
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

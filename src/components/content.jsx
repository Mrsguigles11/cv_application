import { useState } from "react";
import InputGeneralInfo from "./input_gen_info";
import InputEducationalExperience from "./input_edu_exp";
import CV from "./cv";
import "../styles/input_section.css";

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
    "Educational Experience": {
      inputs: {
        "University of Greenwich": {
          schoolName : "University of Greenwich",
          study : "BSc Digital Film Production",
          dateOfStudy : "2016 - 2020",
      },
      },
      currentInput: {
        schoolName: "",
        dateOfStudy: "",
        study: "",
      },
    },
  });

  function handleChange(text, section, input) {
    if (input === undefined) {
      setcvContent(prev => ({...prev, [section]: text}));
    } else {
      setcvContent(prev => ({...prev, [section]: {...prev[section], [input] : text}}));
    }
    console.log(cvContent)
  }

  function handleHeadingClick(index) {
    const collapsibleContents = document.querySelectorAll(
      ".collapsible_content"
    );
    const inputSections = document.querySelectorAll(".input_section");
    collapsibleContents[index].className === "collapsible_content cc_hidden"
      ? (collapsibleContents[index].className =
          "collapsible_content cc_visible")
      : (collapsibleContents[index].className =
          "collapsible_content cc_hidden");
    inputSections[index].className === "input_section"
      ? (inputSections[index].className = "input_section expanded")
      : (inputSections[index].className = "input_section");
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

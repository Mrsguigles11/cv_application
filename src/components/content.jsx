import { useState } from "react";
import InputSection from "./input_section";
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

  return (
    <>
      <div className="inputs_container">
        <InputSection
          heading={"General Information"}
          symbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-circle</title><path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>}
          inputs={["Name", "Email", "Phone Number", "Github", "Profile"]}
          onChange={handleChange}
          content={cvContent}
          index={0}
        />
        <InputSection 
          heading={"Educational Experience"}
          inputs={["School Name", "Study", "Date of Study"]}
          onChange={handleChange}
          content={cvContent}
          index={1}
          />
      </div>
      <div className="cv_container">
        <CV text={cvContent}></CV>
      </div>
    </>
  );
}



export default Content;

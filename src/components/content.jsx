import { useState } from "react";
import InputSection from "./input_section";
import CV from "./cv";

function Content() {
  const [generalInfo, setGeneralInfo] = useState(['', '', '']);

  function handleChange(text, index) {
    let updatedArray = [...generalInfo];
    updatedArray[index] = text;
    setGeneralInfo(updatedArray);
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
        <CV text={generalInfo}></CV>
      </div>
    </>
  );
}

export default Content;

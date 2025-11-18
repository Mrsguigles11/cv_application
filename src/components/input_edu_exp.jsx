import "../styles/input_edu_exp.css";
import { useState } from "react";

function InputEducationalExperience({
  heading,
  onChange,
  content,
  headingClick,
}) {
  const [buttonClickHandler, setButtonClickHandler] = useState(
    () => intialiseAddEduEx
  );
  const [inputValue, setinputValue] = useState("currentInput");
  

  function removeEduEx(school) {
    let currentInputs = { ...content["Educational Experience"]["inputs"] };
    delete currentInputs[school];
    onChange(currentInputs, "Educational Experience", "inputs");
  }

  function intialiseAddEduEx() {
    const eduExpInputs = document.querySelector(".edu_exp_inputs_hidden");
    eduExpInputs.className = "edu_exp_inputs_visible";
    setButtonClickHandler(() => addEduEx);
    setinputValue("currentInput")
  }

  function addEduEx() {
    const schoolName = document.querySelector('input[name="School Name"]');
    const dateOfStudy = document.querySelector('input[name="Date of Study"]');
    const study = document.querySelector('textarea[name="Study"]');
    const eduExpInputs = document.querySelector(".edu_exp_inputs_visible");

    const updatedEduExp = { ...content["Educational Experience"] };
    updatedEduExp["inputs"][schoolName.value] = {
      schoolName : schoolName.value,
      study : study.value,
      dateOfStudy : dateOfStudy.value,
    };

    updatedEduExp.currentInput.schoolName = "";
    updatedEduExp.currentInput.dateOfStudy = "";
    updatedEduExp.currentInput.study = "";
    onChange(updatedEduExp, "Educational Experience");

    schoolName.value = "";
    dateOfStudy.value = "";
    study.value = "";
    eduExpInputs.className = "edu_exp_inputs_hidden";

    setButtonClickHandler(() => intialiseAddEduEx);
  }

  function intialiseEditEduEx(input) {
    const eduExpInputs = document.querySelector(".edu_exp_inputs_hidden");
    eduExpInputs.className = "edu_exp_inputs_visible";

    const schoolName = document.querySelector('input[name="School Name"]');
    const dateOfStudy = document.querySelector('input[name="Date of Study"]');
    const study = document.querySelector('textarea[name="Study"]');

    schoolName.value = input;
    dateOfStudy.value = content["Educational Experience"]["inputs"][input]["dateOfStudy"];
    study.value = content["Educational Experience"]["inputs"][input]["study"];
    setButtonClickHandler(() => addEduEx);
    setinputValue(input)
  }

  function handleChange(value, input, school) {
    let currentInput;
    school === "currentInput" ? currentInput = {
      ...content["Educational Experience"]["currentInput"],
    } : currentInput = {...content["Educational Experience"][inputValue]};
    currentInput[input] = value;
    onChange(currentInput, "Educational Experience", school);
  }

  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => headingClick(1)}>
        <h2>{heading}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>school</title>
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </svg>
      </div>
      <div className="collapsible_content cc_hidden">
        {Object.entries(content["Educational Experience"]["inputs"]).map(
          ([school, details]) => {
            return (
              <div className="education_input">
                <div className="edu_input_content">
                  <div>
                    <h3>{school}</h3>
                    <i>{details.study}</i>
                  </div>
                  <div>{details.dateOfStudy}</div>
                </div>
                <div className="svg_container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => intialiseEditEduEx(school)}>
                    <title>pencil-circle</title>
                    <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() => removeEduEx(school)}
                  >
                    <title>delete-circle</title>
                    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
                  </svg>
                </div>
              </div>
            );
          }
        )}
        <div className="edu_exp_inputs_hidden">
          <div className="input" key={"School Name"}>
            <label htmlFor={"School Name"}>{"School Name"}</label>
            <input
              type="text"
              name={"School Name"}
              onChange={(e) => handleChange(e.target.value, "schoolName", inputValue)}
            />
          </div>
          <div className="input" key={"Date of Study"}>
            <label htmlFor={"Date of Study"}>{"Date of Study"}</label>
            <input
              type="text"
              name={"Date of Study"}
              onChange={(e) => handleChange(e.target.value, "dateOfStudy", inputValue)}
            />
          </div>
          <div className="study_input" key={"Study"}>
            <label htmlFor={"Study"}>{"Study"}</label>
            <textarea
              spellCheck={false}
              name={"Study"}
              onChange={(e) => handleChange(e.target.value, "study", inputValue)}
            />
          </div>
        </div>
        <button onClick={buttonClickHandler} className="add_button">
          Add
        </button>
      </div>
    </div>
  );
}

export default InputEducationalExperience;

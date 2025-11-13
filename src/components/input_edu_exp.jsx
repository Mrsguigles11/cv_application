import "../styles/input_edu_exp.css";
import { useState } from "react";

function InputEducationalExperience({
  heading,
  inputs,
  onChange,
  content,
  headingClick,
}) {

  const [buttonClickHandler, setButtonClickHandler] = useState(() => intialiseAddEduEx)

  function removeEduEx(school) {
    let currentInputs = { ...content["Educational Experience"]["inputs"] };
    delete currentInputs[school];
    onChange(currentInputs, "Educational Experience", "inputs");
  }

  function intialiseAddEduEx() {
    const eduExpInputs = document.querySelector('.edu_exp_inputs_hidden');

    eduExpInputs.className = "edu_exp_inputs_visible";
    setButtonClickHandler(() => addEduEx)

  }

  function addEduEx() {
    const schoolName = document.querySelector('input[name="School Name"]');
    const dateOfStudy = document.querySelector('input[name="Date of Study"]');
    const study = document.querySelector('textarea[name="Study"]');
    const eduExpInputs = document.querySelector('.edu_exp_inputs_visible');

    const currentInputs = { ...content["Educational Experience"]["inputs"] };
    currentInputs[schoolName.value] = [[study.value], [dateOfStudy.value]];
    onChange(currentInputs, "Educational Experience", "inputs");
    schoolName.value = "";
    dateOfStudy.value = "";
    study.value = "";
    eduExpInputs.className = "edu_exp_inputs_hidden";


    setButtonClickHandler(() => intialiseAddEduEx)
    
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
                    <i>{details[0]}</i>
                  </div>
                  <div>{details[1]}</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => removeEduEx(school)}
                >
                  <title>delete-circle</title>
                  <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
                </svg>
              </div>
            );
          }
        )}
        <div className="edu_exp_inputs_hidden">
          {inputs.map((input) => {
            return (
              <>
                {input === "Study" ? (
                  <div className="input study_input" key={input}>
                    <label htmlFor={input}>{input}</label>
                    <textarea
                      spellCheck={false}
                      name={input}
                      onChange={(e) => onChange(e.target.value, heading, input)}
                    />
                  </div>
                ) : (
                  <div className="input" key={input}>
                    <label htmlFor={input}>{input}</label>
                    <input
                      type="text"
                      name={input}
                      onChange={(e) => onChange(e.target.value, heading, input)}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
        <button onClick={buttonClickHandler} className="add_button">Add</button>

      </div>
    </div>
  );
}

export default InputEducationalExperience;

import "../styles/input_type_two.css";
import { useState } from "react";

function InputTypeTwo({
  heading,
  onChange,
  content,
  headingClick,
  index,
  inputs,
  keys,
  svg
}) {
  const [buttonClickHandler, setButtonClickHandler] = useState(
    () => initialiseAdd
  );
  const [inputValue, setinputValue] = useState("currentInput");

  function remove(input) {
    let currentInputs = { ...content[heading]["inputs"] };
    delete currentInputs[input];
    onChange(currentInputs, heading, "inputs");
  }

  function initialiseAdd() {
    const inputs = document.querySelectorAll(".inputs_hidden");
    inputs[index].className = "inputs_visible";
    setButtonClickHandler(() => add);
    setinputValue("currentInput");
  }

  function add() {
    const inputOne = document.querySelector(`input[name='${inputs[0]}']`);
    const inputTwo = document.querySelector(`input[name='${inputs[1]}']`);
    const inputThree = document.querySelector(`textarea[name='${inputs[2]}']`);
    const inputsSection = document.querySelector(".inputs_visible");

    const updatedInputs = { ...content[heading] };
    updatedInputs["inputs"][inputOne.value] = {
      [keys[0]]: inputOne.value,
      [keys[1]]: inputTwo.value,
      [keys[2]]: inputThree.value,
    };

    updatedInputs.currentInput[keys[0]] = "";
    updatedInputs.currentInput[keys[1]] = "";
    updatedInputs.currentInput[keys[2]] = "";
    onChange(updatedInputs, heading);

    inputOne.value = "";
    inputTwo.value = "";
    inputThree.value = "";
    inputsSection.className = "inputs_hidden";

    setButtonClickHandler(() => initialiseAdd);
    setinputValue("currentInput");
  }

  function initialiseEdit(input) {
      const inputsSection = document.querySelectorAll(".inputs_hidden");
      if (inputsSection != null) {
      inputsSection[index].className = "inputs_visible"; }

    const inputOne = document.querySelector(`input[name='${inputs[0]}']`);
    const inputTwo = document.querySelector(`input[name='${inputs[1]}']`);
    const inputThree = document.querySelector(`textarea[name='${inputs[2]}']`);

    inputOne.value = input;
    inputTwo.value = content[heading]["inputs"][input][keys[1]];
    inputThree.value = content[heading]["inputs"][input][keys[2]];
    setinputValue(input);
    setButtonClickHandler(() => edit);
  }

  function edit() {
    const inputOne = document.querySelector(`input[name='${inputs[0]}']`);
    const inputTwo = document.querySelector(`input[name='${inputs[1]}']`);
    const inputThree = document.querySelector(`textarea[name='${inputs[2]}']`);
    const inputsSection = document.querySelectorAll(".inputs_visible");

    inputOne.value = "";
    inputTwo.value = "";
    inputThree.value = "";
    inputsSection[index].className = "inputs_hidden";

    setButtonClickHandler(() => initialiseAdd);
    setinputValue("currentInput");
  }

  function handleChange(value, input, inputHeading) {
    let currentInput;
    if (inputHeading === "currentInput") {
      currentInput = {
        ...content[heading]["currentInput"],
      };
      currentInput[input] = value;
      return onChange(currentInput, heading, "currentInput");
    }
    currentInput = { ...content[heading]["inputs"] };
    currentInput[inputHeading][input] = value;
    onChange(currentInput, heading, "inputs");
  }

  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => headingClick(1)}>
        <h2>{heading}</h2>
        {svg}
      </div>
      <div className="collapsible_content cc_hidden">
        {Object.entries(content[heading]["inputs"]).map(([key, details]) => {
          return (
            <div className="input_card">
              <div className="input_card_content">
                <div>
                  <h3>{details[keys[0]]}</h3>
                  <i>{details[keys[2]]}</i>
                </div>
                <div>{details[keys[1]]}</div>
              </div>
              <div className="svg_container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => initialiseEdit(key)}
                >
                  <title>pencil-circle</title>
                  <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => remove(key)}
                >
                  <title>delete-circle</title>
                  <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
                </svg>
              </div>
            </div>
          );
        })}
        <div className={"inputs_hidden"}>
          <div className="input" key={inputs[0]}>
            <label htmlFor={inputs[0]}>{inputs[0]}</label>
            <input
              type="text"
              name={inputs[0]}
              onChange={(e) =>
                handleChange(e.target.value, keys[0], inputValue)
              }
            />
          </div>
          <div className="input" key={inputs[1]}>
            <label htmlFor={inputs[1]}>{inputs[1]}</label>
            <input
              type="text"
              name={inputs[1]}
              onChange={(e) =>
                handleChange(e.target.value, keys[1], inputValue)
              }
            />
          </div>
          <div className="large_input" key={inputs[2]}>
            <label htmlFor={inputs[2]}>{inputs[2]}</label>
            <textarea
              spellCheck={false}
              name={inputs[2]}
              onChange={(e) =>
                handleChange(e.target.value, keys[2], inputValue)
              }
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

export default InputTypeTwo;

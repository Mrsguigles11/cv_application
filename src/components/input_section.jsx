import "../styles/input_section.css";

function handleClick () {
  const collapsibleContent = document.querySelector('.collapsible_content');
  const inputSection = document.querySelector('.input_section');
  collapsibleContent.className === "collapsible_content hidden" ? collapsibleContent.className = "collapsible_content visible" : collapsibleContent.className = "collapsible_content hidden";
  inputSection.className === "input_section" ? inputSection.className = "input_section expanded" : inputSection.className = "input_section";
}

function InputSection({ heading, inputs, onChange, content, symbol }) {
  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={handleClick}>
        <h2>{heading}</h2>
        {symbol}
      </div>
      <div className="collapsible_content hidden">
        {inputs.map((input) => {
          return (
            <div className="input" key={input}>
              <label htmlFor={input}>{input}</label>
              {input === "Profile" ? (
                <textarea
                  spellCheck={false}
                  name={input}
                  onChange={(e) => onChange(e.target.value, heading, input)}
                  value={content[heading][input]}
                />
              ) : (
                <input
                  type="text"
                  name={input}
                  onChange={(e) => onChange(e.target.value, heading, input)}
                  value={content[heading][input]}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InputSection;

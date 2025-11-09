import "../styles/input_section.css";

function handleClick (index) {
  const collapsibleContents = document.querySelectorAll('.collapsible_content');
  const inputSections = document.querySelectorAll('.input_section');
  collapsibleContents[index].className === "collapsible_content hidden" ? collapsibleContents[index].className = "collapsible_content visible" : collapsibleContents[index].className = "collapsible_content hidden";
  inputSections[index].className === "input_section" ? inputSections[index].className = "input_section expanded" : inputSections[index].className = "input_section";
}

function InputSection({ heading, inputs, onChange, content, symbol, index }) {
  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => handleClick(index)}>
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

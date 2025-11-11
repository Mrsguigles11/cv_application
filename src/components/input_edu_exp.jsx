import "../styles/input_section.css";

function InputEducationalExperience({ heading, inputs, onChange, content, headingClick }) {
  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => headingClick(1)}>
        <h2>{heading}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>
      </div>
      <div className="collapsible_content hidden">
        <div className="education_input"></div>
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

export default InputEducationalExperience
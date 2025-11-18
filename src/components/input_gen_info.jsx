
function InputSection({ heading, inputs, onChange, content, headingClick, index, svg}) {
  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => headingClick(index)}>
        <h2>{heading}</h2>
        {svg}
      </div>
      <div className="collapsible_content cc_hidden">
        {inputs.map((input) => {
          return (
            <>
            {input === "Profile" || input === "Additional Information" ? (
              <div className="input profile_input" key={input}>
              <label htmlFor={input}>{input}</label>
              <textarea
                spellCheck={false}
                name={input}
                onChange={(e) => onChange(e.target.value, heading, input)}
                value={content[heading][input]}
              />
              </div>
            ) : (
              <div className="input" key={input}>
              <label htmlFor={input}>{input}</label>
              <input
                type="text"
                name={input}
                onChange={(e) => onChange(e.target.value, heading, input)}
                value={content[heading][input]}
              />
              </div>
            )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default InputSection;

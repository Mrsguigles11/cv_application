import "../styles/input_section.css";

function InputSection({ heading, inputs, onChange, content }) {
  return (
    <div className="input_section">
      <h2>{heading}</h2>
      {inputs.map((input) => {
        if (input === "Profile") {
          return (
            <div className="input" key={input}>
              <label htmlFor={input}>{input}</label>
              <textarea
                spellCheck={false}
                name={input}
                onChange={(e) => onChange(e.target.value, heading, input)}
                value={content[heading][input]}
              />
            </div>
          );
        }
        return (
          <div className="input" key={input}>
            <label htmlFor={input}>{input}</label>
            <input
              type="text"
              name={input}
              onChange={(e) => onChange(e.target.value, heading, input)}
              value={content[heading][input]}
            />
          </div>
        );
      })}
    </div>
  );
}

export default InputSection;

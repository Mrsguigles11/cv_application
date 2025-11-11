
function InputGeneralInfo({ heading, inputs, onChange, content, headingClick }) {
  return (
    <div className="input_section">
      <div className="input_heading_container" onClick={() => headingClick(0)}>
        <h2>{heading}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-circle</title><path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>
      </div>
      <div className="collapsible_content hidden">
        {inputs.map((input) => {
          return (
            <>
            {input === "Profile" ? (
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

export default InputGeneralInfo;

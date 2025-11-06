import '../styles/input_section.css'

function InputSection({ heading, inputs, onChange}) {
  return (
    <div className='input_section'>
      <h1>{heading}</h1>
      {inputs.map((input) => {
        return (
          <div className='input' key={input}>
            <label htmlFor={input}>{input}</label>
            <input type="text" name={input} onChange={(e) => onChange(e.target.value, heading, inputs.indexOf(input))}/>
          </div>
        );
      })}
    </div>
  );
}

export default InputSection;

import '../styles/input_section.css'

function InputSection({ heading, inputs }) {
  return (
    <div className='input_section'>
      <h1>{heading}</h1>
      {inputs.map((input) => {
        return (
          <div className='input'>
            <label htmlFor={input}>{input}</label>
            <input type="text" name={input}/>
          </div>
        );
      })}
    </div>
  );
}

export default InputSection;

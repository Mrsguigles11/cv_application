import "../styles/inputs.css";
import InputSection from "./input_section";

function Inputs() {
  return (
    <div className="inputs_container">
      <InputSection
        heading={"General Information"}
        inputs={["Name", "Email", "Phone Number"]}
      />
    </div>
  );
}

export default Inputs;

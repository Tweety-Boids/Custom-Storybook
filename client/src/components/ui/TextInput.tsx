import { useState } from "react";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, name, value, onChange }: TextInputProps) => {
  // const [userInput, setUserInput] = useState("");
  return (
    <>
      {/* <h3>--TEXT INPUT</h3> */}
      <div>
        <div>
          {label}:{" "}
          <input type="text" name={name} value={value} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default TextInput;

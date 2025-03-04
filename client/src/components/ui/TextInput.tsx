import {useState} from "react"

interface TextInputProps {
  label: string
}

const TextInput = ({label}:TextInputProps) => {
  const [userInput, setUserInput] = useState('')
    return (
      <>
        {/* <h3>--TEXT INPUT</h3> */}
        <div>
        <div>{label}: <input type='text' value={userInput} onChange={e => setUserInput(e.target.value)}/>
        </div>
        </div>
      </>
    );
  };
  
  export default TextInput;
  
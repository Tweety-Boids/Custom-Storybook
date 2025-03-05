interface OptionList {
  [key: string]: string; // This means any string key will have a string value
}

interface DropdownProps {
  label: string
  options: any[]
}
const Dropdown = ({label, options}: DropdownProps) => {
  const generateDropdownName = (label:string) :string => {
    let name:string[] = label.split(' ')
    name[0] = name[0].toLowerCase()
    return name.join("")
  }

  const dropdownName: string = generateDropdownName(label)

  return (
    <>
      {/* <h3>--DROP DOWN</h3> */}
      <div>
        <label htmlFor={dropdownName}>{label}: </label>
        <select name={dropdownName} id={dropdownName}>
        {/* {options && Object.entries(options).map((option)=>{
          return <option key={option[0]} value={option[0]}>{option[1]}</option>

        })} */}

        {options && options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>
        })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;

interface OptionList {
  [key: string]: string; // This means any string key will have a string value
}

interface DropdownProps {
  label: string
  optionList: OptionList
}
const Dropdown = ({label, optionList}: DropdownProps) => {
  const generateTypeLabel = (label:string) :string => {
    let type:string[] = label.split(' ')
    type[0] = type[0].toLowerCase()
    return type.join("")
  }

  const labelType: string = generateTypeLabel(label)

  return (
    <>
      {/* <h1>--DROP DOWN</h1> */}
      <div>
        <label htmlFor={labelType}>{label}: </label>
        <select name={labelType} id={labelType}>
        {optionList && Object.entries(optionList).map((option)=>{
          return <option key={option[0]} value={option[0]}>{option[1]}</option>

        })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;

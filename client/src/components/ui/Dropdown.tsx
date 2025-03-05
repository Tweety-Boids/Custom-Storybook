interface OptionList {
  [key: string]: string; // This means any string key will have a string value
}

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ label, name, value, options, onChange }: DropdownProps) => {
  // const generateDropdownName = (label:string) :string => {
  //   let name:string[] = label.split(' ')
  //   name[0] = name[0].toLowerCase()
  //   return name.join("")
  // }

  // const dropdownName: string = generateDropdownName(label)

  return (
    <>
      {/* <h3>--DROP DOWN</h3> */}
      <div>
        <label htmlFor={name}>{label}: </label>
        <select name={name} id={name} value={value} onChange={onChange}>
          {options &&
            options.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;

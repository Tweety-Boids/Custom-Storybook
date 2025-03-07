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
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name}>{label}: </label>
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="form-field-text"
        >
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

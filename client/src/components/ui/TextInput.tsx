interface TextInputProps {
  label: string;
  name: string;
  value: string | number;
  size?: number;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void; // Updated type}
}

const TextInput = ({ label, name, value, size, onChange }: TextInputProps) => {
  return (
    <div>
      <div className="flex flex-col text-xl">
        <label htmlFor={name}>{label}:</label>
        {!size ? (
          <input
            className="form-field-text "
            type="text"
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea
            className="form-field-text"
            name={name}
            value={value}
            rows={size}
            onChange={onChange}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default TextInput;

const Dropdown = () => {
  return (
    <>
      {/* <h1>--DROP DOWN</h1> */}
      <div>
        <label htmlFor="dropdownType">Label: </label>
        <select name="dropdownType" id="dropdownType">
          <option value="value1">Option 1</option>
          <option value="value2">Option 2</option>
          <option value="value3">Option 3</option>
        </select>{" "}
      </div>
    </>
  );
};

export default Dropdown;

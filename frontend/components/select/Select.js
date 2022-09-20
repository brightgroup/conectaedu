export const Select = ({
  options = [],
  initialValue = '',
  handleChange = () => {},
  value = '',
  allOption = '',
}) => (
  <div className="select">
    <select onChange={handleChange} value={value}>
      {initialValue && <option value="defaultValue">{initialValue}</option>}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
      {allOption && <option value="all">{allOption}</option>}
    </select>
  </div>
)

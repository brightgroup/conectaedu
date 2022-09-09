export const Select = ({ options = [], initialValue = '', handleChange = () => {} }) => (
  <div className="select">
    <select onChange={handleChange}>
      <option value="defaultValue">{initialValue}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
      <option value="all">Todos los períodos</option>
    </select>
  </div>
)

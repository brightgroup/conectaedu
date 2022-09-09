export const Select = ({ options = [], initialValue = '', handleChange = () => {}, lastOption = false }) => (
  <div className="select">
    <select onChange={handleChange}>
      <option value="defaultValue">{initialValue}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
      {lastOption && <option value="all">Todos los períodos</option>}
    </select>
  </div>
)

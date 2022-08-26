export const Input = ({ label = '', icon = 'fa-user', error = '', ...props }) => {
  return (
    <div className="mb-8">
      <div className="flex items-end gap-3 px-1 relative">
        <i className={`fa-solid ${icon} relative bottom-1 text-${error ? 'error' : 'blue'}`} />
        <input className={`input border-b ${error ? 'text-error' : ''}`} required {...props} />
        <label className={`input__label ${error ? 'input__label-error' : 'text-gray-500'}`}>{label}</label>
      </div>
      {error && <small className="inline-block w-full text-left ml-8 text-tiny text-error">{error}</small>}
    </div>
  )
}

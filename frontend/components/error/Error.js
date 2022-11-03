import React from 'react'

export const Error = ({ text }) => {
  return (
    <p className="form__error">
      <i className="fa-solid fa-circle-xmark form__icon" /> {text}
    </p>
  )
}

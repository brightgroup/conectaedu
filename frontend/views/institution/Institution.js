import React, { useCallback, useEffect, useState } from 'react'
import { InputForm } from 'components/input'
import { hasEmptyFields } from 'utils/Validation'
import { useDispatch, useSelector } from 'react-redux'
import { getInstitutions, updateInstitution } from 'redux/institutions/actions'
import { URLS } from 'api/Urls'

export const Institution = () => {
  const dispatch = useDispatch()

  const { institutions } = useSelector(state => state.institutions)

  const [error, setError] = useState(false)
  const [schoolData, setSchoolData] = useState({
    name: '',
    address: '',
    municipality: '',
    brand: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setSchoolData({ ...schoolData, [name]: value })
  }

  const setSchoolDataRedux = value => {
    setSchoolData({
      name: value['name'],
      address: value['address'],
      municipality: value['municipality'],
      brand: value['brand'],
    })
  }

  const setInstitution = e => {
    e.preventDefault()
    if (hasEmptyFields(schoolData, ['name', 'address', 'municipality'])) return setError(true)
    setError(false)
    dispatch(updateInstitution(schoolData))
  }

  const handleChangeImage = ({ target }) => {
    setSchoolData({ ...schoolData, brand: target.files[0] })
  }

  useEffect(() => {
    dispatch(getInstitutions())
  }, [])

  useEffect(() => {
    institutions.length > 1 ? setSchoolDataRedux(institutions[1]) : null
  }, [institutions])

  return (
    <form
      className="form                                                                                                                                                                                                                                                                                                                                                                         hidden bg-red-300"
      onSubmit={e => setInstitution(e)}
    >
      <h4 className="form__title">Información Institución</h4>
      <InputForm
        placeholder="Nombre de la institucion"
        className={`form__input ${error && !schoolData.name ? 'form__input-error' : null}`}
        name="name"
        onChange={handleChange}
        value={schoolData.name}
        error={error}
        errorText="El Nombre de la institucion es obligatioro"
      />
      <InputForm
        placeholder="Dirección de la institución"
        className={`form__input ${error && !schoolData.address ? 'form__input-error' : null}`}
        name="address"
        onChange={handleChange}
        value={schoolData.address}
        error={error}
        errorText="La direccion de la institucion es obligatioro"
      />
      <InputForm
        placeholder="Municipio"
        className={`form__input ${error && !schoolData.municipality ? 'form__input-error' : null}`}
        name="municipality"
        onChange={handleChange}
        value={schoolData.municipality}
        error={error}
        errorText="El municipio es obligatioro"
      />
      <label className="border p-2 rounded pointer mb-2" htmlFor="logo">
        Subir foto
        <input type="file" className="hidden" id="logo" accept=".jpg,.png" onChange={handleChangeImage} />
      </label>

      {schoolData.brand && (
        <img
          src={
            typeof schoolData.brand === 'object'
              ? URL.createObjectURL(schoolData.brand)
              : `${URLS.images}${schoolData.brand}`
          }
          className="w-20 h-20 mx-auto my-2"
        />
      )}

      <button className="form__button" type="submit">
        Establecer
      </button>
    </form>
  )
}

import { PDFViewer } from '@react-pdf/renderer'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { StudentBulletin } from 'components/student-bulletin'
import { hasEmptyFields } from 'utils/Validation'
import { Error } from './components/Error'
import { styles } from '.'

useSelector

export const Bulletin = () => {
  const router = useRouter()

  const { studentReport } = useSelector(state => state.students)

  const [error, setError] = useState(false)
  const [toggleBulletin, setToggleBulletin] = useState(false)
  const [schoolData, setSchoolData] = useState({
    schoolName: '',
    addres: '',
    municipality: '',
    URLImage: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setSchoolData({ ...schoolData, [name]: value })
  }

  const viewBulletin = e => {
    e.preventDefault()
    if (hasEmptyFields(schoolData, ['schoolName', 'addres', 'municipality'])) return setError(true)
    setError(false)
    setToggleBulletin(true)
  }

  return (
    <div>
      {toggleBulletin ? (
        <div>
          <button onClick={() => router.push('/estudiantes')}>
            <i className="fa-solid fa-chevron-left" /> volver
          </button>

          <PDFViewer style={styles.page}>
            <StudentBulletin studentReport={studentReport} schoolData={schoolData} />
          </PDFViewer>
        </div>
      ) : (
        <div>
          <button
            onClick={() => router.push('/estudiantes')}
            className="d-flex justify-content-center align-items-center "
          >
            <i className="fa-solid fa-chevron-left" /> volver
          </button>
          <form className="form" onSubmit={e => viewBulletin(e)}>
            <h4 className="form__title">Información Boletin</h4>
            <input
              placeholder="Nombre de la institucion"
              className="form__input"
              name="schoolName"
              onChange={e => handleChange(e)}
              value={schoolData.schoolName}
            />

            {error && !schoolData.schoolName ? <Error text="El Nombre de la institucion es obligatioro" /> : null}
            <input
              placeholder="dirección de la institucion"
              className="form__input"
              name="addres"
              onChange={e => handleChange(e)}
              value={schoolData.addres}
            />
            {error && !schoolData.addres ? <Error text="La direccion de la institucion es obligatioro" /> : null}
            <input
              placeholder="Municipio"
              className="form__input"
              name="municipality"
              onChange={e => handleChange(e)}
              value={schoolData.municipality}
            />
            {error && !schoolData.municipality ? <Error text="El Nombre de la institucion es obligatioro" /> : null}
            <input
              placeholder="URL imagen"
              className="form__input"
              name="URLImage"
              onChange={e => handleChange(e)}
              value={schoolData.URLImage}
            />
            <button className="form__button">VER BOLETIN</button>
          </form>
        </div>
      )}
    </div>
  )
}

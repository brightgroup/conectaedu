import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { getStudentObservation, getStudentUser, sendStudentObservation } from 'redux/students/actions'
import { hasEmptyFields } from 'utils/fields'
import { Observer } from 'components/observerPDF'
import { styles } from '.'

export const StudentTable = () => {
  const [observation, setObservation] = useState({ observation: '', compromise: '' })
  const [error, setError] = useState(false)
  const [viewPDF, setViewPDF] = useState(false)

  const dispatch = useDispatch()

  const {
    students: { studentUser, studentObservations },
    auth: { user },
  } = useSelector(state => state)

  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    dispatch(getStudentUser(id))
  }, [id])

  useEffect(() => {
    dispatch(getStudentObservation(id))
  }, [])

  const handleChange = ({ target }) => {
    setObservation({ ...observation, [target.name]: target.value })
    setError(false)
  }

  const sendObservation = () => {
    if (hasEmptyFields(observation, ['observation', 'compromise'])) return setError(true)
    dispatch(
      sendStudentObservation({
        student_id: id,
        user_id: user.id,
        observation: observation.observation,
        goals: observation.compromise,
      })
    )
    setObservation({ observation: '', compromise: '' })
  }

  return (
    <div className="h-full">
      <div className="flex justify-end mb-2">
        <button className="px-3 py-1 text-white bg-gray-600 mr-2 rounded pointer" onClick={() => setViewPDF(!viewPDF)}>
          {viewPDF ? 'Ver Web' : 'Ver PDF'}
        </button>
        <PDFDownloadLink
          document={<Observer studentUser={studentUser} studentObservations={studentObservations} />}
          fileName={`${studentUser.firstname} ${studentUser.lastname} - OBSERVADOR`}
        >
          <button className="px-3 py-1 text-white bg-gray-600 rounded pointer">Descargar PDF</button>
        </PDFDownloadLink>
      </div>
      {viewPDF ? (
        <PDFViewer style={styles.page}>
          <Observer studentUser={studentUser} studentObservations={studentObservations} />
        </PDFViewer>
      ) : (
        <div className="w-full">
          <div className="rounded-lg border border-2 border-gray-600 w-9/12 p-4 mt-4 mx-auto">
            <h4 className="font-bold text-xl mb-3 text-center">Estudiante</h4>
            <p className="font-bold">
              ID:<span className="font-semibold ml-1 text-gray-600">{studentUser?.id}</span>
            </p>
            <p className="font-bold ">
              Nombres:<span className="font-semibold ml-1 text-gray-600">{studentUser?.firstname}</span>
            </p>
            <p className="font-bold ">
              Apellidos:<span className="font-semibold ml-1 text-gray-600">{studentUser?.lastname}</span>
            </p>
            <p className="font-bold ">
              Correo:<span className="font-semibold ml-1 text-gray-600">{studentUser?.email}</span>
            </p>
            <p className="font-bold ">
              Telefono:<span className="font-semibold ml-1 text-gray-600">{studentUser?.phone || 'No disponible'}</span>
            </p>
          </div>
          <div className="rounded-lg border border-2 border-gray-600 w-9/12 p-4 mt-4 mx-auto">
            <h4 className="font-bold text-xl mb-3 text-center">Agregar observacion.</h4>
            <textarea
              placeholder="Descripción..."
              className="w-full outline-0 h-24 rounded-lg p-2"
              onChange={e => handleChange(e)}
              name="observation"
              value={observation.observation}
            />
            {error && !observation.observation.length ? (
              <div className="flex items-center justify-center">
                <i className="fa-regular fa-circle-xmark text-red-600 mr-1" />
                <p className="text-red-600">Es necesario incluir una descripción de la observación</p>
              </div>
            ) : null}
            <h4 className="font-bold text-xl mb-3 text-center ">Compromiso estudiante.</h4>
            <textarea
              placeholder="Descripción..."
              className="w-full outline-0 h-24 rounded-lg p-2"
              onChange={e => handleChange(e)}
              name="compromise"
              value={observation.compromise}
            />
            {error && !observation.compromise.length ? (
              <div className="flex items-center justify-center">
                <i className="fa-regular fa-circle-xmark text-red-600 mr-1" />
                <p className="text-red-600">Es necesario incluir una descripción del compromiso</p>
              </div>
            ) : null}
            <div className="flex justify-center mt-4">
              <button className="rounded mx-auto px-4 py-1 bg-gray-600 text-white" onClick={() => sendObservation()}>
                Agregar
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-2 border-gray-600 container__observations px-6 py-4 mt-4 mx-auto">
            <h4 className="font-bold text-xl mb-3 text-center">Historial observaciones</h4>
            {studentObservations?.map((observation, index) => (
              <div className="p-4 border-b-2 border-gray-600 observation__list w-full" key={index}>
                <div className="flex justify-between w-full">
                  <p className="font-bold">
                    Docente: <span className="font-normal">{observation.Docente}</span>
                  </p>
                  <p>{observation.date}</p>
                </div>
                <p className="font-bold w-full">
                  Observacion: <span className="font-normal">{observation.observation}</span>
                </p>
                <p className="font-bold w-full">
                  Compromiso estudiante: <span className="font-normal">{observation.goals}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

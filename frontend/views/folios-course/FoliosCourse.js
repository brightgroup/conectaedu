import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { FolioCourse } from 'components/folio-course'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInstitutions } from 'redux/institutions/actions'
import { styles } from '.'

export const FoliosCourse = () => {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const { institutions } = useSelector(state => state.institutions)

  useEffect(() => {
    dispatch(getInstitutions())
  }, [])

  return (
    <>
      <div className="flex flex-col bg-white w-fit p-20 mx-auto mt-20">
        <h2 className="text-center form__title text-blue mb-6">Descargar folio por jornada</h2>
        <button className="bg-gray-400 mb-8 rounded px-4 py-2" onClick={() => setShow(!show)}>
          Descargar folios mañana
        </button>
        <button className="bg-gray-400 rounded px-4 py-2">Descargar folios tarde</button>
      </div>
      <div className="w-full h-full border border border-black">
        {show ? <DayMorning institutions={institutions} /> : null}
      </div>
    </>
  )
}

const DayMorning = ({ institutions }) => {
  return (
    <PDFViewer style={styles.page}>
      {/* <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer`}>Descargar PDF</button> */}
      <FolioCourse institutions={institutions} />
    </PDFViewer>
    // <PDFDownloadLink fileName={` Boletines`} document={<FolioCourse />}>
    // </PDFDownloadLink>

    // <h1>se esta ejecutando la funcion para mostrar</h1>
  )
}

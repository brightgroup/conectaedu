import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { FolioCourse } from 'components/folio-course'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFolios, getFoliosMorning } from 'redux/grade/actions'
import { getInstitutions } from 'redux/institutions/actions'
import { buttons, styles } from '.'

export const FoliosCourse = () => {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const {
    institutions: { institutions },
    grades: { folios },
  } = useSelector(state => state)

  useEffect(() => {
    dispatch(getInstitutions())
  }, [])

  useEffect(() => {
    if (folios) {
      Object.keys(folios).length ? setShow(true) : setShow(false)
    }
  }, [folios])

  const requestFolio = (information = '') => {
    dispatch(clearFolios())
    dispatch(getFoliosMorning(information))
  }

  return (
    <>
      <div className="flex flex-col bg-white w-fit p-20 mx-auto mt-20">
        <h2 className="text-center form__title text-blue mb-6">Descargar folio por jornada</h2>
        {buttons.map((buton, index) => (
          <button
            key={index}
            className="bg-gray-400 mb-8 rounded px-4 py-2"
            onClick={
              index !== 0
                ? () => requestFolio({ colegio: buton.colegio, jornada: buton.jornada, secundaria: true })
                : () => requestFolio()
            }
          >
            {buton.name}
          </button>
        ))}
        <div className="flex justify-center">
          {show && (
            <PDFDownloadLink fileName={`FOLIOS`} document={<FolioCourse institutions={institutions} folios={folios} />}>
              <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer`}>Descargar</button>
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </>
  )
}

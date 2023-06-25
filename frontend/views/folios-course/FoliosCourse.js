import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { FolioCourse } from 'components/folio-course'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFolios, getFoliosMorning } from 'redux/grade/actions'
import { getInstitutions } from 'redux/institutions/actions'
import { buttons, styles } from '.'

export const FoliosCourse = () => {
  const [show, setShow] = useState(false)
  const [select, setSelect] = useState("")
  const [showDownload, setShowDownload] = useState(false)
  const [campus, setCampus] = useState({
    libertador: {},
    rondon: {},
    sedeCentral: {}
  })


  const dispatch = useDispatch()

  const {
    institutions: { institutions },
    grades: { folios },
  } = useSelector(state => state)

  useEffect(() => {
    dispatch(getInstitutions())
    requestFolio()
  }, [])

  useEffect(() => {
    if (folios) {
      Object.keys(folios).length ? (setShow(true), filterFolios()) : setShow(false)
    }
  }, [folios])

  const requestFolio = () => {
    dispatch(clearFolios())
    dispatch(getFoliosMorning({
      name: 'Generar Folios Libertador Mañana',
    }))
  }

  const filterFolios = () => {
    const libertador = Object.keys(folios).filter(item => item.includes("LIBERTADOR")).reduce((result, key) => {
      result[key] = folios[key];
      return result;
    }, {})
    const rondon = Object.keys(folios).filter(item => item.includes("RONDON")).reduce((result, key) => {
      result[key] = folios[key];
      return result;
    }, {})
    const sedeCentral = Object.keys(folios).filter(item => item.includes("0")).reduce((result, key) => {
      result[key] = folios[key];
      return result;
    }, {})
    setCampus({
      libertador,
      rondon,
      sedeCentral
    })
  }

  const timerender = (button) => {
    setSelect(button)
    setShowDownload(false)
    setTimeout(() => {
      setShowDownload(true)
    }, 5000);
  }

  return (
    <>
      <div className="flex flex-col bg-white w-fit p-20 mx-auto mt-20">
        <h2 className="text-center form__title text-blue mb-6">Descargar folio por jornada</h2>
        {
          show ? (
            <>
              <span className='text-center mb-2'>Seleccione sede.</span>
              {buttons.map((buton, index) => (
                <button
                  key={index}
                  className={`mb-8 rounded px-4 py-2 ${select === buton.key ? "bg-gray-400" : "bg-gray-200"}`}
                  onClick={
                    () => timerender(buton.key)
                  }
                >
                  {buton.name}
                </button>
              ))}
              {
                select && showDownload ? <div className="flex justify-center">
                  {show && (
                    <PDFDownloadLink fileName={`FOLIOS`} document={<FolioCourse institutions={institutions} folios={campus[select]} />}>
                      <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer`}>Descargar</button>
                    </PDFDownloadLink>
                  )}
                </div> : select && <span className='text-center'>Generando...</span>
              }
            </>
          ) : <h2>
            Estamos en proceso de obtener la información de los estudiantes, esto puede tardar unos sungundos...
          </h2>
        }
      </div >
    </>
  )
}
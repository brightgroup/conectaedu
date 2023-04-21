import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { response, stylesDescription } from '.'
import { GRADES } from 'constants/Bulletin'
import { FILTER_COURSES } from '..'

export const Description = ({ status = '', course = '', student, id_number }) => {
  return (
    <View style={{ marginTop: '30px' }}>
      <Text style={stylesDescription.text_center}>Por Cuanto el Estudiante</Text>
      <Text style={stylesDescription.text_bold_center}>{student}</Text>
      <Text style={stylesDescription.text_bold_center}>{` TI ${id_number?.replace('ti', '')}`}</Text>

      <View style={{ marginTop: '10px' }}>
        <Text style={stylesDescription.text_center}>
          Cursó y<Text style={stylesDescription.text_bold_center}>{` ${response[status.replace(/\s+/g, '')]} `}</Text>
          los estudios correspondientes al grado
          <Text style={stylesDescription.text_bold_center}>
            {` ${FILTER_COURSES[`${course}T`].replace('RONDON', ' ').replace('LIBERTADOR', ' ')}` || '#grado#'}
          </Text>{' '}
          -<Text style={stylesDescription.text_bold_center}>{` ${GRADES[course].educationLevel} `}</Text>
          durante el año lectivo 2022 jornada
          <Text>{'tiempo'}</Text> en concordancia con los fines y objetivos de la Ley 115 de 1.994, el Decreto 1290 del
          16 de abril de 2009 y los criterios de evaluación y promocion del SIEE ( Sistema Institucional de Evaluación
          Escolar)
        </Text>
      </View>
    </View>
  )
}

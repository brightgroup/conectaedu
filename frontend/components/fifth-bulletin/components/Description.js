import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { response, stylesDescription } from '.'

export const Description = ({ status = '', grade = '', student }) => {
  return (
    <View style={{ marginTop: '30px' }}>
      <Text style={stylesDescription.text_center}>Por Cuanto el Estudiante</Text>
      <Text style={stylesDescription.text_bold_center}>{student}</Text>

      <View style={{ marginTop: '10px' }}>
        <Text style={stylesDescription.text_center}>
          Cursó y<Text style={stylesDescription.text_bold_center}>{` ${response[status.replace(/\s+/g, '')]} `}</Text>
          los estudios correspondientes al grado
          <Text style={stylesDescription.text_bold_center}>{` ${grade} `}</Text> de
          <Text style={stylesDescription.text_bold_center}>
            {grade.length ? ' Educacion basica secundaria ' : ' Educacion basica primaria '}
          </Text>
          durante el año colectivo
          <Text>{` ${new Date().getFullYear()} `}</Text>
          jornada
          <Text> Mañana </Text> en concordancia con los fines y objetivos de la Ley 115 de 1.994, los Decretos 1290 del
          16 de abril de 2009 y los criterios de evaluación y promociones del SIEE ( Sistema Institucional de Evaluación
          Escolar)
        </Text>
      </View>
    </View>
  )
}

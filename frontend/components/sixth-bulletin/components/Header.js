import React from 'react'
import { getInstitutionDescription } from 'utils/Bulletin'
import { URLS } from 'api/Urls'
import { GRADES } from 'constants/Bulletin'
import { Image, Text, View } from '@react-pdf/renderer'
import { styles } from '..'

export const Header = ({ institutions, student, course, code, folio }) => {
  return (
    <View style={styles.container__header}>
      <View style={styles.container__header_image}>
        {WithDynamicImage(getInstitutionDescription(institutions, 'brand'), false)}
      </View>
      <View style={styles.container__header_title}>
        <View style={styles.container__description}>
          <Text style={styles.title}>{getInstitutionDescription(institutions, 'name')}</Text>
          <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'address')}</Text>
          <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'municipality')}</Text>
        </View>
        <View style={styles.container__subtitle}>
          <View style={styles.container__subtitle_comulmn1}>
            <Text style={styles.title_bold}>INFORME FINAL DE EVALUACIÓN</Text>
          </View>
          <View style={styles.container__subtitle_comulmn2}>
            <Text style={styles.title}>AÑO</Text>
          </View>
          <View style={styles.container__subtitle_comulmn3}>
            <Text style={styles.title}>CODIGO</Text>
          </View>
        </View>
        <View style={styles.container__information}>
          <View style={styles.information__name}>
            <Text style={styles.subtitleLeft}>Alumno:</Text>
            <Text style={styles.text__student}>{student} </Text>
          </View>
          <View style={styles.information__name}>
            <Text style={styles.subtitleLeft}>Director de Grupo:</Text>
            <Text style={styles.text__student}>{GRADES[course]?.director}</Text>
          </View>
          <View style={{ width: '15%', fontSize: 10 }}>
            <View style={{ paddingLeft: 6 }}>
              <Text style={styles.subtitle}>2022</Text>
            </View>
            <View style={styles.box_background}>
              <Text style={styles.title}>GRADO</Text>
            </View>
            <View style={{ paddingLeft: 6, paddingTop: 2 }}>
              <Text style={styles.subtitle}>{GRADES[course]?.name}</Text>
            </View>
          </View>
          <View style={{ width: '15%', fontSize: 10 }}>
            <View style={{ paddingLeft: 6 }}>
              <Text style={styles.subtitle}>{code}</Text>
            </View>
            <View style={styles.box_background}>
              <Text style={styles.title}>FOLIO</Text>
            </View>
            <View style={{ paddingLeft: 6, paddingTop: 2 }}>
              <Text style={styles.subtitle}>{folio}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const WithDynamicImage = (image, background = true) => {
  let imageDynamic = URLS.assets(image)
  return (
    <Image src={imageDynamic} alt="Picture of the author" style={background ? styles.backgroundImage : styles.image} />
  )
}

import { Image, Text, View } from '@react-pdf/renderer'
import { URLS } from 'api/Urls'
import { GRADES } from 'constants/Bulletin'
import React from 'react'
import { getCourseDescription, getInstitutionDescription } from 'utils/Bulletin'
import { styles } from '.'

export const Header = ({ institutions }) => {
  console.log(institutions)
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
        <View style={styles.container__header_color}>
          <View style={styles.container__header_col1}>
            <Text style={styles.subtitle}>TEMA</Text>
          </View>
          <View style={styles.container__header_col2}>
            <Text style={styles.subtitle}>GRADO</Text>
            {/* <Text style={styles.subtitle}>{GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].name}</Text> */}
          </View>
          <View style={{ width: '10%' }}>
            <Text style={styles.subtitle}>AÑO</Text>
          </View>
        </View>
        <View style={styles.container__header_description}>
          <View style={styles.container__header_col1}>
            <Text style={styles.subtitle_padding}>INDICE DE FOLIOS</Text>
          </View>
          <View style={styles.container__header_col2}>
            <Text style={styles.subtitle_padding}>noveno</Text>
            {/* <Text style={styles.subtitle}>{GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].name}</Text> */}
          </View>
          <View style={{ width: '10%' }}>
            <Text style={styles.subtitle_padding}>2022</Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.container__header_image}>
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
            <Text style={{ fontSize: 10 }}>BOLETIN DE EVALUACION</Text>
          </View>
          <View style={styles.container__subtitle_comulmn2}>
            <Text style={styles.title}>AÑO</Text>
          </View>
          <View style={styles.container__subtitle_comulmn3}>
            <Text style={styles.title}>Periodo</Text>
          </View>
        </View>
        <View style={styles.container__information}>
          <View style={styles.information__name}>
            <Text style={styles.subtitle}>Alumno:</Text>
            <Text style={styles.text__student}>{student[courses?.[1]]?.[0]?.student}</Text>
          </View>
          <View style={styles.information__name}>
            <Text style={styles.subtitle}>Director de Grupo:</Text>
            <Text style={styles.text__student}>
              {GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].director}
            </Text>
          </View>
          <View style={{ width: '27.5%', fontSize: 10 }}>
            <View style={{ paddingLeft: 6 }}>
              <Text style={styles.subtitle}>2022</Text>
            </View>
            <View style={styles.box_background}>
              <Text style={styles.title}>GRADO</Text>
            </View>
            <View style={{ paddingLeft: 6, paddingTop: 2 }}>
              <Text style={styles.subtitle}>
                {GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].name}
              </Text>
            </View>
          </View>
          <View style={{ width: '14%' }}>
            <View style={{ paddingLeft: 6 }}>
              <Text style={styles.subtitle}>{period}</Text>
            </View>
            <View style={styles.box_background}>
              <Text style={styles.title}>JORNADA</Text>
            </View>
            <View style={{ paddingLeft: 6, paddingTop: 2 }}>
              <Text style={styles.subtitle}>
                {GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].time}
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  )
}

const WithDynamicImage = (image, background = true) => {
  let imageDynamic = URLS.assets(image)
  return (
    <Image src={imageDynamic} alt="Picture of the author" style={background ? styles.backgroundImage : styles.image} />
  )
}

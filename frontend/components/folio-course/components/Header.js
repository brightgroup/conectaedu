import { Image, Text, View } from '@react-pdf/renderer'
import { URLS } from 'api/Urls'
import React from 'react'
import { getInstitutionDescription } from 'utils/Bulletin'
import { styles } from '.'

export const Header = ({ institutions, course }) => {
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
            <Text style={styles.subtitle_padding}>{course}</Text>
          </View>
          <View style={{ width: '10%' }}>
            <Text style={styles.subtitle_padding}>2022</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

//render image

const WithDynamicImage = (image, background = true) => {
  let imageDynamic = URLS.assets(image)
  return (
    <Image src={imageDynamic} alt="Picture of the author" style={background ? styles.backgroundImage : styles.image} />
  )
}

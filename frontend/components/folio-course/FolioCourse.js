import { Document, Page, Text, View } from '@react-pdf/renderer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInstitutions } from 'redux/institutions/actions'
import { styles } from '.'
import { Header } from './components'

export const FolioCourse = ({ institutions }) => {
  return (
    <Document>
      <Page className="">
        <View style={styles.container}>
          <Header institutions={institutions} />
        </View>
      </Page>
    </Document>
  )
}

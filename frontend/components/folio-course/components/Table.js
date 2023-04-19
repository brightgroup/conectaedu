import { View } from '@react-pdf/renderer'
import { Row } from './Row'
import { styles } from '.'

export const Table = ({ students }) => {
  return (
    <View style={styles.table}>
      <Row item="N°" name="NOMBRE ESTUDIANTE" folio="FOLIO" observation="OBSERVACIÓN" approve="SI" fail="NO" />

      {students?.map((student, index) => (
        <Row
          key={index}
          item={index + 1}
          name={student.student}
          folio={student.folio}
          observation={student.retirado === 1 && 'RETIRADO'}
          status={student.retirado !== 1 && student.status}
        />
      ))}
    </View>
  )
}

import { StyleSheet, Text, View, TouchableOpacity ,Dimensions} from 'react-native'
import moment from 'moment'

moment.updateLocale('mn', {
  months: 'нэгдүгээр_хоёрдугаар_гуравдугаар_дөрөвдүгээр_тавдугаар_зургаадугаар_долоодугаар_наймдугаар_есдүгээр_аравдугаар_арваннэгдүгээр_арванхоёрдугаар'.split('_'),
  monthsShort: 'нэг_хоёр_гурав_дөрөв_тав_зургаа_долоо_найм_ес_арав_арваннэг_арванхоёр'.split('_'),
  weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
  weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
  weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY оны MMMMын D',
    LLL: 'YYYY оны MMMMын D HH:mm',
    LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
  },
  calendar: {
    sameDay: '[Өнөөдөр] LT',
    nextDay: '[Маргааш] LT',
    nextWeek: 'dddd LT',
    lastDay: '[Өчигдөр] LT',
    lastWeek: '[Өнгөрсөн] dddd LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: '%s дараа',
    past: '%s өмнө',
    s: 'хэдэн секунд',
    ss: '%d секунд',
    m: 'нэг минут',
    mm: '%d минут',
    h: 'нэг цаг',
    hh: '%d цаг',
    d: 'нэг өдөр',
    dd: '%d өдөр',
    M: 'нэг сар',
    MM: '%d сар',
    y: 'нэг жил',
    yy: '%d жил'
  },
  dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
  ordinal: function (number) {
    return number + ' өдөр';
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});

const {height,width } = Dimensions.get('window');
moment.locale('mn');

const Date = ({ date, onSelectDate, selected }) => {
  const day =  moment(date).format('ddd')
  const dayNumber = moment(date).format('D')
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor: "#9800ff" }]}
    >
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day} 
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  )
}

export default Date

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#282A2C',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: height*0.098,
    width: width*0.15,
    marginHorizontal: 5,
  },
  big: {
    fontWeight: 'bold',
    fontSize: width*0.043,
    color:"#ffffff"
  },
  medium: {
    fontSize: width*0.0,
    color: '#ffffff'
  },
})

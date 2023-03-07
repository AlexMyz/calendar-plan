  // преобразование даты к виду ДД.ММ.ГГГГ
  export const convertDate = (data) => {
      let date = new Date(data)

      let day = date.getDate()
      if (day < 10) {
          day = '0' + day
      }
      let month = date.getMonth() + 1
      if (month < 10) {
          month = '0' + month
      }
      let year = date.getFullYear()

      return  day + '.' + month + '.' + year
  }


  // вычисление номера недели (четная - нечетная)
  export const getWeek = (current, start) => {
      let currentDate = new Date(current)
      let startDate = new Date(start)

      let dayOfWeekOfStartDate = startDate.getDay()
      if (dayOfWeekOfStartDate == 0) dayOfWeekOfStartDate = 7

      let numberOfDays = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000)) + 1
      let weekNumber = Math.ceil(( numberOfDays + dayOfWeekOfStartDate - 1) / 7)

      return weekNumber % 2 === 0 ? 'even' : 'odd'
  }


  // получение названия дня недели
  export function getWeekDayAbbr(data) {
      let date = new Date(data)

      let days = ['н', 'пн', 'в', 'c', 'ч', 'пт', 'сб']

      return days[date.getDay()]
  }

  // получение названия месяца
  export const getMonthName = (date) => {
      const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']

      return months[date.getMonth()]
  }


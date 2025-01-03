import { arrVacations } from "../holidays/vacations"
import { arrHolidays } from "../holidays/holidays"
import { getWeek } from "../functions"
import { outputTable } from "./output"

export const result = (startDate, endDate, daysWeek, sn) => {
  // перебор всех дат в выбранном промежутке
  for (let i = startDate; i <= endDate; i = i + 24 * 60 * 60 * 1000) {
    // дата не должна входить в праздники и каникулы
    if (!arrHolidays.includes(i) && !arrVacations.includes(i)) {
      let date = new Date(i)

      // проверка входит ли дата в массив дней недели
      if (daysWeek.includes(date.getDay())) {
        // значение количества уроков в день из select
        let number = document.getElementsByName("numberOfLessons")[date.getDay() - 1].value
        let numberValue = number.match(/\d/g)

        if (numberValue.length == 2) {
          if (getWeek(i, startDate) == "odd") {
            sn = outputTable(numberValue[0], i, sn)
          } else if (getWeek(i, startDate) == "even") {
            sn = outputTable(numberValue[1], i, sn)
          }
        } else {
          sn = outputTable(numberValue[0], i, sn)
        }
      }
    }
  }
  return sn
}

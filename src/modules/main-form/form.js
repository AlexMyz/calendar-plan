import { arrHolidays } from "../holidays/holidays"
import { arrVacations } from "../holidays/vacations"
import { outputReset, outputHead, outputTable } from "./output"
import { getWeek } from "../functions"

const form = () => {
  
  document.getElementById("form-main").addEventListener("submit", function(e) {
    e.preventDefault()
    outputReset()
    this.classList.add("was-validated")

    if (this.checkValidity()) {
      const start = Date.parse(document.getElementById("start-date").value)
      const end = Date.parse(document.getElementById("end-date").value)

      let daysWeek = []
      let checked = false
      let sn = document.getElementById("initialNumber").value

      for (let elem of document.getElementsByName("day")) {
        if (elem.checked) {
          daysWeek.push(+elem.value)
          checked = true
        }
      }

      // проверка выбраны ли дни с выводом предупреждения
      checked == false
        ? document.getElementById('feedbackCheckbox').classList.remove("d-none")
        : document.getElementById('feedbackCheckbox').classList.add("d-none")

      if (checked == true) {
        outputHead()
        document.getElementById("exportXLSX").classList.remove("d-none")
        // перебор всех дат в выбранном промежутке
        for (let i = start; i <= end; i = i + 24 * 60 * 60 * 1000) {
          // дата не должна входить в праздники и каникулы
          if (!arrHolidays.includes(i) && !arrVacations.includes(i)) {
            let date = new Date(i)

            // проверка входит ли дата в массив дней недели
            if (daysWeek.includes(date.getDay())) {
              // значение количества уроков в день из select
              let number = document.getElementsByName("numberOfLessons")[date.getDay() - 1].value
              let numberValue = number.match(/\d/g)

              if (numberValue.length == 2) {
                if (getWeek(i, start) == "odd") {
                  sn = outputTable(numberValue[0], i, sn)
                } else if (getWeek(i, start) == "even") {
                  sn = outputTable(numberValue[1], i, sn)
                }
              } else {
                sn= outputTable(numberValue[0], i, sn)
              }
            }
          }
        }
      }

      this.classList.remove("was-validated")
    }
  })
}

export default form

import { arrHolidays } from "../holidays/holidays"
import { arrVacations } from "../holidays/vacations"
import { outputReset, outputHead, outputTable } from "./output"
import { getWeek } from "../functions"

const form = () => {

  const result = (startDate, endDate, daysWeek, sn) => {
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
            sn= outputTable(numberValue[0], i, sn)
          }
        }
      }
    }
  }

  
  document.getElementById("form-main").addEventListener("submit", function(e) {
    e.preventDefault()

    outputReset()
    document.getElementById("exportXLSX").classList.add("d-none")

    this.classList.add("was-validated")

    if (this.checkValidity()) {

      const startPeriod = document.getElementById("start-date")
      const endPeriod = document.getElementById("end-date")

      let daysWeek = []
      let checked = false

      // проверка ввода правильного диапазона дат
      if (endPeriod.value < startPeriod.value) {
        document.getElementById('feedbackRange').classList.remove("d-none")
        startPeriod.classList.add("is-invalid")
        endPeriod.classList.add("is-invalid")
        for (let item of document.getElementsByName('range')) {
          item.addEventListener('change', () => {
            if (endPeriod.value >= startPeriod.value) {
              document.getElementById('feedbackRange').classList.add("d-none")
              startPeriod.classList.remove("is-invalid")
              endPeriod.classList.remove("is-invalid")
            }
          })
        }
      }

       // заполнение массива днецй недели
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

      if (checked == true && endPeriod.value >= startPeriod.value) {

        document.getElementById('spinner').classList.remove('d-none')
        document.getElementById('output').classList.add('d-none')
        outputHead()
        document.getElementById("exportXLSX").classList.remove("d-none")

        const startDate = Date.parse(startPeriod.value)
        const endDate = Date.parse(endPeriod.value)

        let sn = document.getElementById("initialNumber").value

        result(startDate, endDate, daysWeek, sn)

        setTimeout(() => {
          document.getElementById('spinner').classList.add('d-none')
          document.getElementById('output').classList.remove('d-none')
          document.getElementById('btnReset').classList.remove('d-none')
        }, 500);

      }

      this.classList.remove("was-validated")
    }
  })
}

export default form

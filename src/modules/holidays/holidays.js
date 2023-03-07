import { getMonthName } from "../functions"
import { firstSemesterYear, secondSemesterYear } from "./current-period"

// официальные праздничные дни
const holidays = [
  {
    name: "День української державності",
    date: firstSemesterYear + "-07-28",
  },
  {
    name: "День Незaлежності України",
    date: firstSemesterYear + "-08-24",
  },
  {
    name: "День захисників і захисниць України",
    date: firstSemesterYear + "-10-14",
  },
  {
    name: "Різдво Христове",
    date: firstSemesterYear + "-12-25",
  },
  {
    name: "Новий рік",
    date: secondSemesterYear + "-01-01",
  },
  {
    name: "Різдво Христове",
    date: secondSemesterYear + "-01-07",
  },
  {
    name: "Міжнародний жіночий день",
    date: secondSemesterYear + "-03-08",
  },
  {
    name: "Великдень",
    date: secondSemesterYear + "-04-16",
  },
  {
    name: "День праці",
    date: secondSemesterYear + "-05-01",
  },
  {
    name: "День Перемоги",
    date: secondSemesterYear + "-05-09",
  },
  {
    name: "свято Трійці",
    date: secondSemesterYear + "-06-04",
  },
  {
    name: "День Конституції України",
    date: secondSemesterYear + "-06-28",
  },
]

const arrHolidays = []

// вывод празднтков на странице
for (let item of holidays) {
  let date = new Date(item.date)

  // arrHolidays.push(date.getTime())

  document.getElementById("collapseHolidays").innerHTML += `
          <p>${date.getDate()} ${getMonthName(date)} — ${item.name}</p>
      `
}

export { arrHolidays }

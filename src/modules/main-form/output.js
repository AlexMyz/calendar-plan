import { convertDate, getWeekDayAbbr } from "../functions"

const outDate = document.getElementById("out-date")
const outCount = document.getElementById("out-count")
const outDay = document.getElementById("out-day")
const outTable = document.getElementById("out-table")

// функция очистки поля
export const outputReset = () => {
  outDate.innerHTML = ""
  outCount.innerHTML = ""
  outDay.innerHTML = ""
  outTable.innerHTML = ""
}

// функция выводв шапки таблицы
export const outputHead = () => {
  outCount.innerHTML += `
                <tr>
                    <th>п/н</th>
                </tr>
            `

  outDate.innerHTML += `
                <tr>
                    <th>дата</th>
                </tr>
            `

  outDay.innerHTML += `
                <tr>
                    <th>д/т</th>
                </tr>
            `

  outTable.innerHTML += `
                <tr>
                    <th>п/н</th>
                    <th>дата</th>
                    <th>д/т</th>
                </tr>
            `
}

// функция выводв результата
export const outputTable = (number, date, sn) => {
  for (let i = 0; i < number; i++) {
    outCount.innerHTML += `
                <tr>
                    <td>${sn}</td>
                </tr>
            `

    outDate.innerHTML += `
                <tr>
                    <td>${convertDate(date)}</td>
                </tr>
            `

    outDay.innerHTML += `
                <tr>
                    <td>${getWeekDayAbbr(date)}</td>
                </tr>
            `

    outTable.innerHTML += `
                <tr>
                    <td>${sn}</td>
                    <td>${convertDate(date)}</td>
                    <td>${getWeekDayAbbr(date)}</td>
                </tr>
            `
    
    sn ++
  }
  return sn
}
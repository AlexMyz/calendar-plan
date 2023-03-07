import { convertDate } from "../functions"

const vacations = [
  {
    name: "fall",
    startDate: "2022-10-22",
    endDate: "2022-10-30",
    dates: [],
  },
  {
    name: "winter",
    startDate: "2022-12-24",
    endDate: "2023-01-08",
    dates: [],
  },
  {
    name: "spring",
    startDate: "2023-03-25",
    endDate: "2023-04-02",
    dates: [],
  },
]

// заполнение массива дат для определенных каникул
const createArrayDates = (vacationName) => {
  let foundVacation = vacations.find((item) => item.name == vacationName)
  foundVacation.dates = []
  for (let i = Date.parse(foundVacation.startDate); i <= Date.parse(foundVacation.endDate);i = i + 1000 * 3600 * 24
  ) {
    foundVacation.dates.push(i)
  }
}

createArrayDates("fall")
createArrayDates("winter")
createArrayDates("spring")

//===== Формирование массива дат всех каникул ===========
let arrVacations = []
const createArrVacations = () => {
  arrVacations = []
  vacations.forEach((item) => {
    arrVacations = arrVacations.concat(item.dates)
  })
}

createArrVacations()

// выаод каникул на странице
for (let item of vacations) {
  document.getElementById("vacations").innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div>з <span>${convertDate(item.startDate)}</span> до <span>${convertDate(item.endDate)}</span> </div>
            <div>
                <button type="button" class="btn btn-primary" name="btnEditVacation" data-vacation-name='${item.name}' data-bs-toggle="modal" data-bs-target="#modalEditVacationDates">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button type="button" class="btn btn-primary" name="btnDeleteVacation" data-vacation-name='${item.name}' data-bs-toggle="modal" data-bs-target="#modalDeleteVacation">
                    <i class="bi bi-x-square"></i>
                </button>
            </div>
        </div>
    `
}

export { vacations, arrVacations, createArrayDates, createArrVacations }
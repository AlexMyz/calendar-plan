import { vacations, createArrVacations } from "./vacations"

let vacationName
let divVacation

const clickBtnDeleteVacation = () => {
  for (let btn of document.getElementsByName("btnDeleteVacation")) {
    btn.addEventListener("click", () => {
      vacationName = btn.dataset.vacationName
      divVacation = btn.parentElement.parentElement
    })
  }
}
clickBtnDeleteVacation()

const deleteVacation = (vacationName) => {
  let foundVacation = vacations.findIndex((item) => item.name == vacationName)
  vacations.splice(foundVacation, 1)
  divVacation.remove()
}

document.getElementById("btnConfirmDeleteVacation").addEventListener("click", () => {
    deleteVacation(vacationName)
    createArrVacations()
  })

export { clickBtnDeleteVacation }

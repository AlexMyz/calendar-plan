import { vacations, createArrayDates, createArrVacations } from "./vacations"
import { clickBtnDeleteVacation } from "./vacation-delete"
import { editVacationDates } from "./vacation-edit"
import { addNewVacation } from "./vacation-add"

const editVacations = () => {
  const modalEditVacationDates = new bootstrap.Modal("#modalEditVacationDates")
  const formEditVacationDates = document.getElementById("formEditVacationDates")

  let vacationName
  let newVacationName = 0
  let displayVacationStartDate
  let displayVacationEndDate
  let flag

  const clickBtnEditVacation = () => {
    for (let btn of document.getElementsByName("btnEditVacation")) {
      btn.addEventListener("click", () => {
        flag = "edit"
        vacationName = btn.dataset.vacationName
        displayVacationStartDate = btn.parentElement.previousElementSibling.firstElementChild
        displayVacationEndDate = btn.parentElement.previousElementSibling.lastElementChild

        let foundVacation = vacations.find((item) => item.name == vacationName)
        formEditVacationDates[0].value = foundVacation.startDate
        formEditVacationDates[1].value = foundVacation.endDate
      })
    }
  }
  clickBtnEditVacation()

  document.getElementById("btnAddVacation").addEventListener("click", () => {
    flag = "add"
    newVacationName ++
    vacationName = newVacationName
  })

  // действия при закрытии модального окна без сохранения изменений
  modalEditVacationDates._element.addEventListener("hidden.bs.modal", (e) => {
    formEditVacationDates.reset()
    formEditVacationDates.classList.remove("was-validated")
    document.querySelector(".validationRange").classList.add("d-none")
    for (let item of formEditVacationDates.inputVacationDate) {
      item.classList.remove("is-invalid")
      item.classList.remove("is-valid")
    }
  })

  // проверка ввода правильного диапазона дат
  let validationRange = true
  for (let item of formEditVacationDates.inputVacationDate) {
    item.addEventListener("change", () => {
      if (formEditVacationDates[0].value != "" && formEditVacationDates[1].value != "") {
        if (formEditVacationDates[0].value > formEditVacationDates[1].value) {
          formEditVacationDates.classList.remove("was-validated")
          document.querySelector(".validationRange").classList.remove("d-none")
          formEditVacationDates[0].classList.remove("is-valid")
          formEditVacationDates[1].classList.remove("is-valid")
          formEditVacationDates[0].classList.add("is-invalid")
          formEditVacationDates[1].classList.add("is-invalid")
          validationRange = false
        } else {
          document.querySelector(".validationRange").classList.add("d-none")
          formEditVacationDates[0].classList.remove("is-invalid")
          formEditVacationDates[1].classList.remove("is-invalid")
          formEditVacationDates[0].classList.add("is-valid")
          formEditVacationDates[1].classList.add("is-valid")
          validationRange = true
        }
      }
    })
  }

  // обработка формы изменения новых дат каникул
  formEditVacationDates.addEventListener("submit", function (e) {
    e.preventDefault()

    if (validationRange == true) {
      this.classList.add("was-validated")
      if (this.checkValidity()) {
        let startDate = this[0].value
        let endDate = this[1].value

        if (flag == "add") {
          addNewVacation(vacationName, startDate, endDate)
          clickBtnEditVacation()
          clickBtnDeleteVacation()
        } else if (flag == "edit") {
          editVacationDates(vacationName, startDate, endDate, displayVacationStartDate, displayVacationEndDate)
          clickBtnEditVacation()
          clickBtnDeleteVacation()
        }

        modalEditVacationDates.hide()
        this.classList.remove("was-validated")
        this.reset()
      }
    }
  })
}

export default editVacations

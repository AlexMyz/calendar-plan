const modalCountLessons = () => {
  const modalNumberOfLessons = new bootstrap.Modal("#modalNumberOfLessons")
  const selectsNumberOfLessons = document.querySelectorAll(".selectNumberOfLessons")
  const inputsNumderOfLessons = document.querySelectorAll(".inputNumderOfLessons")
  const inputsRadioWeek = document.getElementsByName("radioWeek")
  const inputEveryWeek = document.getElementById("inputEveryWeek")
  const inputOddWeeks = document.getElementById("inputOddWeeks")
  const inputEvenWeeks = document.getElementById("inputEvenWeeks")
  const formChangeNumber = document.forms.changeNumberOfLessons

  let weekDay

  // вызов модального окна ввода количества уроков
  selectsNumberOfLessons.forEach((item, index) => {
    item.addEventListener("change", () => {
      if (item.value == "other") {
        modalNumberOfLessons.show()
        weekDay = index
      }
    })
  })

  // действия при закрытии модального окна без сохранения изменений
  modalNumberOfLessons._element.addEventListener("hidden.bs.modal", (e) => {
    formChangeNumber.reset()
    formChangeNumber.classList.remove("was-validated")

    for (let elem of inputsNumderOfLessons) {
      elem.setAttribute("disabled", "disabled")
    }

    if (selectsNumberOfLessons[weekDay].value == "other") {
      selectsNumberOfLessons[weekDay].value = "1"
    }
  })

  // активация/деактивация полей ввода количества уроков
  for (let node of inputsRadioWeek) {
    node.addEventListener("change", () => {
      for (let elem of inputsNumderOfLessons) {
        elem.setAttribute("disabled", "disabled")
        elem.value = ""
      }
      for (let elem of node.parentElement.getElementsByTagName("*")) {
        if (elem.classList.contains("inputNumderOfLessons")) {
          elem.removeAttribute("disabled")
        }
      }
    })
  }

  // подставление 0 в поле при заполнении только четного/нечетного поля
  formChangeNumber.inWeek.forEach((item, index) => {
    item.addEventListener("input", () => {
      formChangeNumber.inWeek.forEach((it, ind) => {
        if (ind != index && it.value == "") {
          it.value = "0"
        }
      })
    })
  })

  // обработка данных полей ввода количества уроков
  formChangeNumber.addEventListener("submit", function(e) {
    e.preventDefault()
    this.classList.add("was-validated")

    if (this.checkValidity()) {
      // добавление нового элемента option в зависимости от выбора
      let option
      for (let node of inputsRadioWeek) {
        if (node.checked && node.id == "radioEveryWeek") {
          option = new Option(
            inputEveryWeek.value,
            inputEveryWeek.value,
            false,
            true
          )
        } else if (node.checked && node.id == "radioInAWeek") {
          option = new Option(
            inputOddWeeks.value + "/" + inputEvenWeeks.value,
            inputOddWeeks.value + "/" + inputEvenWeeks.value,
            false,
            true
          )
        }
      }
      // проверка не дублируется ли option
      let n = 0
      for (let elem of selectsNumberOfLessons[weekDay].options) {
        if (elem.value == option.value) {
          n++
        }
      }
      if (n == 0) {
        selectsNumberOfLessons[weekDay].prepend(option)
      } else {
        selectsNumberOfLessons[weekDay].value = option.value
      }

      modalNumberOfLessons.hide()
    }
  })
}

export default modalCountLessons
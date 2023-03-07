const countLessons = () => {
  const numberOfLessons = document.getElementsByName("numberOfLessons")

  document.getElementsByName("day").forEach((item, index) => {
    item.addEventListener("change", () => {
      if (numberOfLessons[index].hasAttribute("disabled")) {
        numberOfLessons[index].removeAttribute("disabled")
      } else {
        numberOfLessons[index].setAttribute("disabled", "disabled")
      }

      document.getElementById('feedbackCheckbox').classList.add("d-none")
    })
  })
}

export default countLessons
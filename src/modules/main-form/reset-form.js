import { outputReset } from "./output"

const resetForm = () => {
  document.getElementById('btnReset').addEventListener('click', function() {
    for(let item of document.getElementsByName("numberOfLessons")) {
      item.setAttribute("disabled", "disabled")
    }
    outputReset()
    document.getElementById("exportXLSX").classList.add("d-none")
    this.classList.add("d-none")
  })
}

export default resetForm
const defaultPeriods = () => {
  document.getElementById("btnFirstSemester").addEventListener("click", () => {
    document.getElementById("start-date").value = "2022-09-01"
    document.getElementById("end-date").value = "2022-12-23"
  })

  document.getElementById("btnSecondSemester").addEventListener("click", () => {
    document.getElementById("start-date").value = "2023-01-09"
    document.getElementById("end-date").value = "2023-06-30"
  })
}

export default defaultPeriods
const now = new Date()

let firstSemesterYear
let secondSemesterYear

if (now.getMonth() >= 0 && now.getMonth() < 6) {
  firstSemesterYear = now.getFullYear() - 1
  secondSemesterYear = now.getFullYear()
} else {
  firstSemesterYear = now.getFullYear()
  secondSemesterYear = now.getFullYear() + 1
}

// вывод периода в заголовке
const title = document.getElementById("title")
title.firstElementChild.innerText = firstSemesterYear
title.lastElementChild.innerText = secondSemesterYear

export { firstSemesterYear, secondSemesterYear }
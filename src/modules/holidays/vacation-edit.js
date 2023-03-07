import { vacations, createArrayDates, createArrVacations } from "./vacations"
import { convertDate } from "../functions"

export const editVacationDates = (vacationName, startDate, endDate, displayVacationStartDate, displayVacationEndDate) => {
    let foundVacation = vacations.find(item => item.name == vacationName)
    foundVacation.startDate = startDate
    foundVacation.endDate = endDate
    displayVacationStartDate.innerText = convertDate(startDate)
    displayVacationEndDate.innerText = convertDate(endDate)
    createArrayDates(vacationName)
    createArrVacations()
}
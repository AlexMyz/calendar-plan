import { vacations, createArrayDates, createArrVacations, organazeVacations, outputVacations } from "./vacations"

export const addNewVacation = (vacationName, startDate, endDate) => {

    vacations.push({
        name: vacationName,
        startDate: startDate,
        endDate: endDate,
        dates: []
    })
    
    organazeVacations()
    outputVacations()
    createArrayDates(vacationName)
    createArrVacations()
}
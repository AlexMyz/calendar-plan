import { convertDate } from "../functions"
import { vacations, createArrayDates, createArrVacations } from "./vacations"

export const addNewVacation = (vacationName, startDate, endDate) => {

    vacations.push({
        name: vacationName,
        startDate: startDate,
        endDate: endDate,
        dates: []
    })

    document.getElementById('vacations').innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div>з <span>${convertDate(startDate)}</span> до <span>${convertDate(endDate)}</span> </div>
            <div>
                <button type="button" class="btn btn-primary" name="btnEditVacation" data-vacation-name='${vacationName}' data-bs-toggle="modal" data-bs-target="#modalEditVacationDates">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button type="button" class="btn btn-primary" name="btnDeleteVacation" data-vacation-name='${vacationName}' data-bs-toggle="modal" data-bs-target="#modalDeleteVacation">
                    <i class="bi bi-x-square"></i>
                </button>
            </div>
        </div>
    `
    createArrayDates(vacationName)
    createArrVacations()
}
//========= Каникулы =========================================

const vacation = [
    {
        name: 'vacationFall',
        startDate: '2022-10-22',
        endDate: '2022-10-30',
        dates: []
    },
    {
        name: 'vacationWinter',
        startDate: '2022-12-24',
        endDate: '2023-01-08', 
        dates: []
    },
    {
        name: 'vacationSpring',
        startDate: '2023-03-25',
        endDate: '2023-04-02',
        dates: []
    }
]




const createArrayDates = (vacationName) => {
    let findVacation = vacation.find( item => item.name == vacationName)
    findVacation.dates = []
    for (let i = Date.parse(findVacation.startDate); i <= Date.parse(findVacation.endDate); i = i + 1000 * 3600 * 24) {
        findVacation.dates.push(i)
    }
}

createArrayDates('vacationFall')
createArrayDates('vacationWinter')
createArrayDates('vacationSpring')


//===== Формирование массива дат всех каникул ===========

let vacations = []
const createVacations = () => {
    vacations = []
    vacation.forEach(item => {
        vacations = vacations.concat(item.dates)
    })
}
createVacations()


// ======= Редактирование дат каникул =====================================

const btnEditVacation = document.querySelectorAll('.btn-editVacation')
const editDatesVacation = document.getElementById('editDatesVacation')
const modalChangeDate = new bootstrap.Modal('#modalChangeDate') 
const dateStartModal = document.getElementById('dateStartModal')
const dateEndModal = document.getElementById('dateEndModal')

let vacationName
let startDateVacation
let endDateVacation

//===== преобразование даты к виду ДД.ММ.ГГГГ =====
const transformationDate = (data) => {
    let date = new Date(data)
    
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = date.getFullYear();

    let fullDate = day + '.' + month + '.' + year;

    return fullDate
}

const changeDatesVacation = (vacationName) => {
    let findVacation = vacation.find(item => item.name == vacationName)
    findVacation.startDate = dateStartModal.value
    findVacation.endDate = dateEndModal.value
    startDateVacation.innerText = transformationDate(dateStartModal.value)
    endDateVacation.innerText = transformationDate(dateEndModal.value)
}

btnEditVacation.forEach(el => {
    
    el.addEventListener('click', () => {
        vacationName = el.dataset.vacationName
        startDateVacation = el.previousElementSibling.firstElementChild
        endDateVacation = el.previousElementSibling.lastElementChild
    })

}) 

editDatesVacation.addEventListener('submit', (e) => {
    e.preventDefault()
    editDatesVacation.classList.add('was-validated')
    if (editDatesVacation.checkValidity()) {
        changeDatesVacation(vacationName)
        createArrayDates(vacationName)
        createVacations()
        modalChangeDate.hide()
        editDatesVacation.classList.remove('was-validated')
        editDatesVacation.reset()
        
    }
})



export {vacations}
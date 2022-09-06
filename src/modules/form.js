import {holidays} from './dates'
import {vacations} from './vacations'


const form = () => {

    const btnFirstSemester = document.querySelector('.first-semester')
    const btnSecondSemester = document.querySelector('.second-semester')
    const feedbackCheckbox = document.querySelector('.invalid-feedback-checkbox')
    const dateStart = document.getElementById('start-date')
    const dateEnd = document.getElementById('end-date')
    const out = document.getElementById('out')
    const formMain = document.getElementById('form-main')


    btnFirstSemester.addEventListener('click', () => {
        dateStart.value = '2022-09-01';
        dateEnd.value = '2022-12-23';
    }) 

    btnSecondSemester.addEventListener('click', () => {
        dateStart.value = '2023-01-09';
        dateEnd.value = '2023-06-30';
    })



    formMain.addEventListener('submit', (e) => {
        e.preventDefault();
        out.innerHTML = '';
        formMain.classList.add('was-validated')
        if (formMain.checkValidity()) {

            const start = Date.parse(dateStart.value);
            const end = Date.parse(dateEnd.value);

            let daysWeek = [];
            let checks = document.getElementsByName('day');
            let n = 0;

            for (let i = 0; i < checks.length; i++) {
                if (checks[i].checked) {
                    n++
                    daysWeek.push(+checks[i].value);
                }
                
            }

            (n == 0) ? feedbackCheckbox.classList.remove('d-none') : feedbackCheckbox.classList.add('d-none')


            for (let i = start; i <= end; i=i+24*60*60*1000) {

                let date = new Date(i);
                if (daysWeek.includes(date.getDay()) && !holidays.includes(i) && !vacations.includes(i)) {

                    // if (i == transferFrom1) {
                    //     date = new Date(transferTo1);
                    // } else if (i == transferFrom2) {
                    //     date = new Date(transferTo2);
                    // } else if (i == transferFrom3) {
                    //     date = new Date(transferTo3);
                    // }

                    // преобразование даты к виду ДД.ММ.ГГГГ
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
                    out.innerHTML += `
                        <tr>
                                <td>${fullDate}</td>
                            </tr>
                        `
                }
            }

            formMain.classList.remove('was-validated')

        }   

    });


    function getWeekDay(date) {
        let days = ['н', ['пн'], ['в'], ['c'], ['ч'], ['пт'], ['сб']]

        return days[date.getDay()]
    }
}

export default form
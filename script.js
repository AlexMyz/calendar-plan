// официальные праздничные дни и перенесенные при совпадении праздничных и рабочих
const holidays = [
	// Date.parse('2021-10-14'),
	// Date.parse('2021-12-27'),
	// Date.parse('2022-01-01'),
	// Date.parse('2022-01-03'),
	// Date.parse('2022-01-07'),
	// Date.parse('2022-03-08'),
	// Date.parse('2022-04-24'),
	// Date.parse('2022-04-25'),
	// Date.parse('2022-05-01'),
	// Date.parse('2022-05-02'),
	// Date.parse('2022-05-09'),
	// Date.parse('2022-06-12'),
	// Date.parse('2022-06-13'),
	// Date.parse('2022-06-28'),
	// Date.parse('2022-08-24'),
]

// перенос рабочих дней по рекомендации правительства
const transferFrom1 = 0 //Date.parse('2021-10-15');
const transferTo1 = 0 //Date.parse('2021-10-23');

const transferFrom2 = 0 // Date.parse('2022-03-07');
const transferTo2 = 0 // Date.parse('2022-03-12');

const transferFrom3 = 0 // Date.parse('2022-06-27');
const transferTo3 = 0 // Date.parse('2022-07-02');

// каникулы
const vacationFall = [
	Date.parse('2022-10-22'),
	Date.parse('2022-10-23'),
	Date.parse('2022-10-24'),
	Date.parse('2022-10-25'),
	Date.parse('2022-10-26'),
	Date.parse('2022-10-27'),
	Date.parse('2022-10-28'),
	Date.parse('2022-10-29'),
	Date.parse('2022-10-30'),
]

const vacationWinter = [
	Date.parse('2022-12-24'),
	Date.parse('2022-12-25'),
	Date.parse('2022-12-26'),
	Date.parse('2022-12-27'),
	Date.parse('2022-12-28'),
	Date.parse('2022-12-29'),
	Date.parse('2022-12-30'),
	Date.parse('2022-12-31'),
	Date.parse('2023-01-01'),
	Date.parse('2023-01-02'),
	Date.parse('2023-01-03'),
	Date.parse('2023-01-04'),
	Date.parse('2023-01-05'),
	Date.parse('2023-01-06'),
	Date.parse('2023-01-07'),
	Date.parse('2023-01-08'),
]

const vacationSpring = [
	Date.parse('2023-03-25'),
	Date.parse('2023-03-26'),
	Date.parse('2023-03-27'),
	Date.parse('2023-03-28'),
	Date.parse('2023-03-29'),
	Date.parse('2023-03-30'),
	Date.parse('2023-03-31'),
	Date.parse('2023-04-01'),
	Date.parse('2023-04-02'),
]

const vacation = vacationFall.concat(vacationWinter, vacationSpring)


// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
function validationModal() {
  'use strict'

  // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  const forms = document.querySelectorAll('.needs-validation')

  // Зацикливайтесь на них и предотвращайте отправку
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}
validationModal()

let season
document.querySelectorAll('.btn-vacation').forEach((item) => {
  item.addEventListener('click', () => {
    season = item.dataset.season
  })
})


const modalChangeDate = document.getElementById('modalChangeDate')
const formModal = document.getElementById('form-modal')
const dateStartModal = document.getElementById('date-start-modal')
const dateEndModal = document.getElementById('date-end-modal')

// modalChangeDate.addEventListener('click', e => {
//   if (e.target.id === 'modalChangeDate' || e.target.classList.contains('modal-close')) {
//     formModal.classList.remove('was-validated')
//     dateStartModal.value = ''
//     dateEndModal.value = ''
//   }
// })

// modalChangeDate.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(dateStartModal.value)
//   console.log(Date.parse(dateStartModal.value))
//   console.log(dateEndModal.value)
//   console.log(Date.parse(dateEndModal.value))



// })







const dateStart = document.getElementById('start-date')
const dateEnd = document.getElementById('end-date')
const out = document.getElementById('out')


document.querySelector('.first').onclick = function() {
	dateStart.value = '2022-09-01';
	dateEnd.value = '2022-12-23';
}

document.querySelector('.second').onclick = function() {
	dateStart.value = '2023-01-09';
	dateEnd.value = '2023-06-30';
}


document.getElementById('form-main').addEventListener('submit', (event) => {
	event.preventDefault();
	out.innerHTML = '';

	const start = Date.parse(dateStart.value);
	const end = Date.parse(dateEnd.value);

	let daysWeek = [];
	let checks = document.getElementsByName('day');

	for (let i = 0; i < checks.length; i++) {
		if (checks[i].checked) {
			daysWeek.push(+checks[i].value);
		}
		
	}

	let n = 0;

	for (let i = start; i <= end; i=i+24*60*60*1000) {

		date = new Date(i);
		if (daysWeek.includes(date.getDay()) && !holidays.includes(i) && !vacation.includes(i)) {

			n++;

			if (i == transferFrom1) {
				date = new Date(transferTo1);
			} else if (i == transferFrom2) {
				date = new Date(transferTo2);
			} else if (i == transferFrom3) {
				date = new Date(transferTo3);
			}

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

});


function getWeekDay(date) {
	let days = ['н', ['пн'], ['в'], ['c'], ['ч'], ['пт'], ['сб']]

	return days[date.getDay()]
}
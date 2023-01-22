const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já está incluso')
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('habits')) || 

button.addEventListener('click', add)
form.addEventListener('change', save)

nlwSetup.setData(data)
nlwSetup.load()

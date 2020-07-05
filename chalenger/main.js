const input = document.querySelector('input')
const div = document.querySelector('div')

const chalenges = []

const btnAdd = document.querySelector('button.add')
const btnShow = document.querySelector('button.choice')

const addChalenge = (e) => {
    e.preventDefault()
    const chalengeText = input.value;
   
    input.value = '';
    chalenges.push(chalengeText)
    console.log(chalenges)
}



btnAdd.addEventListener('click', addChalenge)

const showChalenge = () => {
    const chalengeIndex = Math.floor(Math.random() * chalenges.length)
    div.textContent = `Today chalenge for you: ${chalenges[chalengeIndex]}`
}

btnShow.addEventListener('click', showChalenge)

const btnReset = document.querySelector('button.clean')

const cleanAll = (e) => {
    e.preventDefault()
    chalenges.length = 0;
    div.textContent = '';
    alert('Create your list again !')
}
btnReset.addEventListener('click', cleanAll)
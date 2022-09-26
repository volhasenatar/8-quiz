const button = document.querySelector('.btn')
button.addEventListener('click', result)

function result(e) {
    e.preventDefault()

    let score = 0

    if (document.querySelector('#answer-one').checked) {
        score++
    }
    if (document.querySelector('#answer-two').checked) {
        score++
    }
    if (document.querySelector('#answer-three').checked) {
        score++
    }
    if (document.querySelector('#answer-four').checked) {
        score++
    }
    if (document.querySelector('#answer-five').checked) {
        score++
    }
    if (document.querySelector('#answer-six').checked) {
        score++
    }
    if (document.querySelector('#answer-seven').checked) {
        score++
    }
    if (document.querySelector('#answer-eight').checked) {
        score++
    }
    if (document.querySelector('#answer-nine').checked) {
        score++
    }
    if (document.querySelector('#answer-ten').checked) {
        score++
    }
    if (document.querySelector('#answer-eleven').checked) {
        score++
    }
    if (document.querySelector('#answer-twelve').checked) {
        score++
    }
    if (document.querySelector('#answer-thirteen').checked) {
        score++
    }
    if (document.querySelector('#answer-fourteen').checked) {
        score++
    }
    if (document.querySelector('#answer-fifteen').checked) {
        score++
    }

    const rightAnswer = document.querySelectorAll('.answer')
        rightAnswer.forEach((item) => {
        item.style.color = 'blue';
    }) 
    
    document.querySelector('.par').textContent = 'Prawidłowe odpowiedzi ' + score + ' z 15.'
}

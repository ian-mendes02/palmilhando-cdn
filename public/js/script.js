const avisoJanela = document.getElementById('aviso-janela')
const popupContent = avisoJanela.querySelector('.wrapper')
const forms = popupContent.querySelectorAll('form')
const submitLink = popupContent.querySelector('a')
const submitButton = submitLink.querySelector('button')
const formsContainer = popupContent.querySelector('.container')

window.onload = () => {
    avisoJanela.style.display = 'block'
    setTimeout(() => {
        avisoJanela.style.opacity = '1'
    }, 100)
    setTimeout(() => {
        popupContent.style.top = '50%'
    }, 200)
    setTimeout(() => {
        popupContent.style.opacity = '1'
    }, 500)
}

function createInput (current) {
    let input = document.createElement('input')
    let formID = 'outra_' + current.getAttribute('id')
    input.setAttribute('type', 'text')
    input.setAttribute('id', formID)
    input.setAttribute('placeholder', 'Especifique...')
    input.setAttribute('name', 'outro:')
    current.appendChild(input)
};

function dismissPopup () {

    formsContainer.style.opacity = '0'
    submitButton.style.display = 'none'
    popupContent.querySelector('span').style.display = 'none'

    setTimeout(() => {
        formsContainer.style.display = 'none'
        popupContent.querySelector('h1').innerHTML = '<mark class="bold gradient">Muito obrigado!</mark>'
        popupContent.querySelector('h2').innerText = 'Suas informações foram registradas e seu acesso será liberado em alguns instantes.'
    }, 900)

    setTimeout(() => {
        setTimeout(() => {
            popupContent.style.top = '200%'
        }, 300)
        setTimeout(() => {
            popupContent.style.opacity = '0'
        }, 400)
        setTimeout(() => {
            avisoJanela.style.opacity = '0'
        }, 500)
        setTimeout(() => {
            avisoJanela.style.display = 'none'
        }, 600)
    }, 3000)

};

var hasInput = (current) => { return (current.childElementCount > 2) }

function recordData () {
    let formData = {}
    for (var i = 0; i < forms.length; i++) {
        var form = forms[i]
        let select = form.querySelector('select')
        if (hasInput(form)) {
            let input = form.querySelector('input')
            formData[select.name] = select.value
            formData[`Outra ${select.name}:`] = input.value
        } else {
            formData[select.name] = select.value
        }
    }
    console.log(formData)
    dismissPopup()
};

forms[0].addEventListener('click', () => {
    if (forms[0].querySelector('select').value === 'nao') {
        for (var i = 1; i < forms.length; i++) { forms[i].style.display = 'none' };
        submitLink.setAttribute('href', 'desculpe.html')
        submitButton.classList.add('enabled')
    }
})

const lastForm = forms[forms.length - 1]

lastForm.addEventListener('change', () => {
    let select = lastForm.querySelector('select')
    if (select.value != '') {
        submitButton.classList.add('enabled')
        submitButton.setAttribute('onclick', 'recordData()')
    }
})

for (var i = 0; i < forms.length; i++) {

    let current = forms[i]
    let select = current.querySelector('select')
    let next = forms[i + 1]

    forms[i].addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    })

    select.addEventListener('change', () => {

        submitLink.removeAttribute('href')
        submitButton.removeAttribute('onclick')
        submitButton.classList.remove('enabled')

        if (hasInput(current)) {
            current.querySelector('input').remove()

        } else if (select.value === 'outra') {
            next.style.display = 'none'
            createInput(current)
            let input = current.querySelector('input')
            input.focus()
            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    input.blur()
                    next.focus()
                }
            })
            input.addEventListener('change', () => {
                if (input.value.length != 0) {
                    next.style.display = 'block'
                }
            })
        };

        if (select.value != '' && select.value != 'outra') {
            next.style.display = 'block'
        };
    })

}
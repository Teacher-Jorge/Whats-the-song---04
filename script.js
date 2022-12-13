let wordGone = document.getElementById("wordGone")
let btnWent = document.getElementById('btnWent')
let btnGo = document.getElementById('btnGo')
let btnGone = document.getElementById('btnGone')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Não quero conversar sobre as coisas pelas quais passamos. Embora esteja me machucando, agora é história'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 5000)

})


btnGone.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordGone.innerHTML = 'Gone'
    wordGone.style.color = 'lime'
    btnGone.style.background = 'lawngreen'
    btnGone.style.color = 'green'
    btnGone.disabled = 'true'
    btnWent.disabled = 'true'
    btnGo.disabled = 'true'
})

btnWent.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordGone.innerHTML = 'went'
    wordGone.style.color = 'red'
    btnWent.style.background = 'red'
    btnWent.disabled = 'true'
})

btnGo.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordGone.innerHTML = 'go'
    wordGone.style.color = 'red'
    btnGo.style.background = 'red'
    btnGo.disabled = 'true'
})
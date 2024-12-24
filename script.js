// Text Strings
const lastExtracted = 'Ultimo numero estratto:'
const endGame = 'Tutti i numeri estratti!'
const defaultText = '';

// Variables
const endBtn = document.getElementById('endgame');
const table = document.getElementById('table');
const extractBtn = document.getElementById('extract');
const lastExtractedEl = document.querySelector('#buttons-container > h3')


// Create table numbers
for (let i = 0; i < 100; i++){
    const markup = `
        <div class="col-1">
            <div class="card" id=${i}>
                ${i}
            </div>
        </div>
    `


    table.innerHTML += markup;
};


// Logic for Extraction Button
extractBtn.addEventListener('click', () => {
    let number = Math.floor(Math.random()*100)

    const activeEls = document.getElementsByClassName('active')

    if (Array.from(activeEls).length === 100){
        lastExtractedEl.innerHTML = endGame
        alert('Tutti i numeri sono stati estratti!')
        extractBtn.disabled = true
        return
    }

    while (document.getElementById(number).classList.contains('active') && Array.from(activeEls).length < 100) {
        number = Math.floor(Math.random()*100)        
    }

    document.getElementById('extracted').innerHTML = number
    lastExtractedEl.innerHTML == defaultText ? lastExtractedEl.innerHTML = lastExtracted : null
    lastExtractedEl.classList.contains('hide') ? lastExtractedEl.classList.remove('hide') : null

    document.getElementById(number).classList.add('active')
});


// Reset the table
endBtn.addEventListener('click', () => {
    if (document.getElementsByClassName('active').length >= 15){
        Array.from(document.getElementsByClassName('card')).forEach(card => card.classList.remove('active'));
        document.getElementById('extracted').innerHTML = defaultText;
        lastExtractedEl.classList.add('hide')
        extractBtn.disabled = false
    }
});
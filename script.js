// Text Strings
const lastExtracted = 'Ultimo numero estratto:'
const endGame = 'Tutti i numeri estratti!'

// Variables
const endBtn = document.getElementById('endgame');
const table = document.getElementById('table');
const extractBtn = document.getElementById('extract');
const lastExtractedEl = document.querySelector('#buttons-container > h3')
// lastExtractedEl.style.visibilty = 'hidden'



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
    // console.log(activeEls);
    

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
    // lastExtractedEl.style.visibility == 'hidden' ? lastExtractedEl.style.visibility = 'visible' : null
    lastExtractedEl.innerHTML == '' ? lastExtractedEl.innerHTML = lastExtracted : null
    lastExtractedEl.classList.contains('hide') ? lastExtractedEl.classList.remove('hide') : null

    document.getElementById(number).classList.add('active')
});


// Reset the table
endBtn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('card')).forEach(card => card.classList.remove('active'));
    document.getElementById('extracted').innerHTML = '';
    lastExtractedEl.classList.add('hide')
    extractBtn.disabled = false
});
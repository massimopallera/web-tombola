
// Variables
const endBtn = document.getElementById('endgame');
const table = document.getElementById('table');
const extractBtn = document.getElementById('extract');
const textEl = document.querySelector('#buttons-container > h3')
const text = 'Ultimo numero estratto'

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

    if (Array.from(document.getElementsByClassName('active')).length === 100){
        alert('Tutti i numeri sono stati estratti!')
        extractBtn.disabled = true
        return
    }

    while (document.getElementById(number).classList.contains('active') && Array.from(document.getElementsByClassName('active')).length < 100) {
        number = Math.floor(Math.random()*100)        
    }

    document.getElementById('extracted').innerHTML = number
    textEl.innerHTML == '' ? textEl.innerHTML = text : null
    document.getElementById(number).classList.add('active')
    console.log(document.getElementById(number))
});

// Reset the table
endBtn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('card')).forEach(card => card.classList.remove('active'));
    document.getElementById('extracted').innerHTML = '';
});
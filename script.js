// Text Strings
const lastExtracted = 'Ultimo numero estratto:'
const endGame = 'Tutti i numeri estratti!'
const defaultText = '';

const numbersPerCard = 15
const cl = [] //cardList

// Variables
const endBtn = document.getElementById('endgame');
const table = document.getElementById('table');
const extractBtn = document.getElementById('extract');
const lastExtractedEl = document.querySelector('#buttons-container > h3')
const formEl = document.querySelector('#new-cards form');
const cardsEl = document.getElementById('cards')


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


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputEl = document.getElementById('insert-cards') 
    const cards = Number(inputEl.value);
    // console.log(typeof cards);

    //if cards are added, it will disappear
    if(cards > 0 && cards <= 50 && typeof(cards) === 'number') { // create a limit
        formEl.classList.add('hide')
        // create cards
        for(let i = 0; i < cards; i++){
            const newCard = []
            for(let j = 0; j < numbersPerCard; j++){
                let number = Math.floor(Math.random()*100)
                // console.log(number);
                

                while(newCard.includes(number) && newCard.length != 0){
                    number = Math.floor(Math.random()*100)
                }

                newCard.push(number)
            }
            cl.push(newCard.sort(function(a,b){return a-b})) // sort has some problems to sort with numbers, this function fix the problem
        }

        // console.log(cl);
        for(let i = 0; i < cl.length; i++){
            const markup = `
            <div class='col-12'>
                <div class='row'>
                    <div>${i+1}</div> 

                    ${cl[i].map(element => `<span class="card">${element}</span>`).join(" ")}        
                </div>
            </div>
            `
            cardsEl.innerHTML += markup
        }

        
    }
    
})
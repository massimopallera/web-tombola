const table = document.getElementById('table');

for (let i = 0; i < 100; i++){
    const markup = `
        <div class="col-1">
            <div class="card" id=${i}>
                ${i}
            </div>
        </div>
    `


    table.innerHTML += markup;
}

const extractBtn = document.getElementById('extract');
extractBtn.addEventListener('click', () => {
    let number = Math.floor(Math.random()*100)

    if (Array.from(document.getElementsByClassName('active')).length === 100){
        alert('Tutti i numeri sono stati estratti!')
        extractBtn.ariaDisabled
        return
    }



    while (document.getElementById(number).classList.contains('active') && Array.from(document.getElementsByClassName('active')).length < 100) {
        number = Math.floor(Math.random()*100)        
    }

    document.getElementById('extracted').innerHTML = number
    document.getElementById(number).classList.add('active')
    console.log(document.getElementById(number))
});


const endBtn = document.getElementById('endgame');
endBtn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('card')).forEach(card => card.classList.remove('active'));
    document.getElementById('extracted').innerHTML = '';
});
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

/* 

    to change state of a number, getElementById(id) and add in classList active class

*/

const extractBtn = document.getElementById('extract');
extractBtn.addEventListener('click', () => {
    const number = Math.floor(Math.random()*100)
    document.getElementById('extracted').innerHTML = number
    document.getElementById(number).classList.add('active')
    console.log(document.getElementById(number))
});
// To create the app I'll need a global context for cards and useState to change the state of extracted numbers
// I could add a timer to extract numbers 


import { useState } from 'react'
import './App.css'

function App() {

  const [numbers, setNumbers] = useState( () => {
    
    const arr = []

    for (let index = 0; index < 100; index++) {
      arr.push(index)
    }

    return arr
  })

  return (
    <>
      <header>
        <h1>Tombola</h1>
      </header>

      <main>
        {/* create all cards */}
        <div class="container">

            <div class="row">
                <div id="table" class="col-8">
                  {numbers.map((state, index) => <div className='col-1' key={index}>
                    <div className='card'>
                      {index}
                    </div>
                  </div>)}
                </div>
                
                <div id="buttons-container" class="col-4">
                        <h3 class="hide">Ultimo numero estratto:</h3>
                    <div id="extracted"></div>
                    
                    <hr/>
                    
                    <div class="text-center">
                        <button id="extract">Estrai Numero</button><br/>
                        <button id="endgame" disabled>Termina Gioco</button>
                    </div>
                </div>
                
            </div>

            <div id="new-cards">
                <form>
                    <label for="cards">Inserisci numero di cartelle:</label>
                    <input type="number" id="insert-cards" name="insert-cards" placeholder="Inserisci numero di cartelle" />
                    <button type="submit">Crea Cartelle</button>
                </form>
                
                <div id="cards" class="">

                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default App

/*url ='https://pokeapi.co/api/v2/pokemon/&per_page=5'
page = 1

var form_check = document.querySelector('.Button')
form_check.addEventListener('button',(e) =>{
    e.preventDefault()
    var button = document.querySelector('[placeholder="Enter the value"]')
  var button_value = button.Value
  api(page,button_value)
})*/


/*const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    try {
      fetch(baseUrl)
        .then(response => {
          const responseJson = response.json()
          
          return responseJson
        })
        
        .then(data => {
          const pokemons = data.results
           
          
          pokemons.forEach(pokemon => {
           
            document.getElementById('pokemons')
              .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`)
          })
        })
        .catch(error => {
          console.error(error)
        })
   } catch (error) {
     console.error(error)
    }

    const detail = (url) => {
      try {
        fetch(url)
          .then(response => response.json())
          .then(pokemon => {
            document.getElementById('detail').innerHTML = ''
            
              .insertAdjacentHTML('beforeend', 
                `
                  <h1>${pokemon.name}</h1>
                  <img src="${pokemon.sprites.front_default}" 
                  
                `
              )
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      }
     }*/
     
     const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    try {
      fetch(baseUrl)
        .then(response => {
          const responseJson = response.json()
          return responseJson
        })
        .then(data => {
          const pokemons = data.results
          pokemons.forEach(pokemon => {
            document.getElementById('pokemons')
              .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`)
          })
        })
        .catch(error => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }

    const detail = (url) => {
      try {
        fetch(url)
          .then(response => response.json())
          .then(pokemon => {
            document.getElementById('detail').innerHTML = ''
            document.getElementById('detail')
              .insertAdjacentHTML('beforeend', 
                `
                  <h1>${pokemon.name}</h1>
                  <img src="${pokemon.sprites.front_default}" />
                `
              )
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      }
    }
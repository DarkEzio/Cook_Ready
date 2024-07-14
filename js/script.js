
var ingred
var intolerante
var nazionalita

function totale(){
  ingred=document.getElementById('ingredienti').value;
  intolerante=document.getElementById('intolerante').value;
  nazionalita=document.getElementById('nazionalita').value;

  document.getElementById('lista').innerHTML=ingred;
  console.log("Nazionalita':",nazionalita);
  console.log("Intoleranza:",intolerante);
  console.log("Ingredienti:",ingred);

}

function ricette(){

const url = 'https://api.spoonacular.com/recipes/complexSearch';

//Parametri

const queryParams = new URLSearchParams({
    apiKey:'55b7ab45be33475daa8bac087c900325',
    number:1, // Numero di risultati da ottenere
    cuisine:nazionalita,
    intolerances: intolerante,
    includeIngredients:ingred
  });

  //API

fetch(`${url}?${queryParams}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parsa la risposta JSON
  })
  .then(data => {
    
    console.log(data); // Gestisci i dati ricevuti
    var img=document.getElementById('img');
    document.getElementById('titolo_ricetta').innerHTML=data['results']['0']['title'];
    img.src=data['results']['0']['image'];
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error); // Gestisci eventuali errori
  });

  
}



const cocktailLoad = async(text) =>{
    //console.log(text)
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
    const data = await response.json();
  
    displaycocktailLoad(data.drinks)
}

const displaycocktailLoad = (datas) =>{
    const found = document.getElementById('not-found');
    console.log(datas);
    if(datas === null){
        found.innerText =`
        not found
        `
    }
    
   
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

   
    datas.forEach( (data) => {
       // console.log(data)
        const {idDrink,strImageSource,strAlcoholic,strDrink,strDrinkThumb} =  data;
        const div = document.createElement('div');
        div.innerHTML =`<div class="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src="${strDrinkThumb}" alt="Shoes" /></figure>
        <div  class="card-body">
          <h2 class="card-title">${strDrink.length > 20 ? strDrink.slice(0,20) : strDrink}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
          <label onclick="loadDetails(${idDrink})" for="my-modal" class="btn modal-button">open modal</label>
          </div>
        </div>
      </div>`;
      cardContainer.appendChild(div);
    });
}

const searcCocktail = () =>{
    const inputField = document.getElementById('text-field');
    const inputFieldValue = inputField.value;
    //console.log(inputFieldValue)

    cocktailLoad(inputFieldValue)
    inputField.value = '';
}

const loadDetails = async(id) =>{
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
 // console.log(data.drinks[0])
  displayloadDetails(data.drinks[0])
}

const displayloadDetails = (item) =>{
    const modalBody = document.getElementById('modal-body');  
    const {strDrinkThumb,strAlcoholic} = item;

    modalBody.innerHTML =`
     <img src="${strDrinkThumb}" class"h-50" alt="">
     <h3 class"text-5xl">${strAlcoholic}</h3>
    `
}
//displaycocktailLoad();

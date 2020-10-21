const API_KEY = '1'
const randomDrink_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/random.php`;
let ingredientsContainer = document.querySelector('.ingredientsContainer')

const getRandomCocktail = (event) => {
  axios.get(randomDrink_URL)
   .then(response => {
      let cocktail = response.data.drinks[0]
      let cocktailName = cocktail.strDrink
      let glassType = cocktail.strGlass
      let instructions = cocktail.strInstructions
      let imageContainer = document.querySelector('.imageContainer')
      let nameContainer = document.querySelector('.nameContainer')
      let instructionsContainer = document.querySelector('.instructionsContainer')
      nameContainer.innerHTML = '';
      imageContainer.innerHTML = '';
      instructionsContainer.innerHTML = '';
      ingredientsContainer.innerHTML = "";
      let measurments = [
         cocktail.strMeasure1,
         cocktail.strMeasure2,
         cocktail.strMeasure3,
         cocktail.strMeasure4,
         cocktail.strMeasure5,
         cocktail.strMeasure6,
         cocktail.strMeasure7,
         cocktail.strMeasure8,
         cocktail.strMeasure9,
         cocktail.strMeasure10,
         cocktail.strMeasure11]

       let ingredients = [
         cocktail.strIngredient1,
         cocktail.strIngredient2,
         cocktail.strIngredient3,
         cocktail.strIngredient4,
         cocktail.strIngredient5,
         cocktail.strIngredient6,
         cocktail.strIngredient7,
         cocktail.strIngredient8,
         cocktail.strIngredient9,
         cocktail.strIngredient10,
         cocktail.strIngredient11
      ]

      for (let i = 0; i < ingredients.length;i++){
         // console.log(ingredients[i])
         if (ingredients[i] !== null  ){
            let newli = document.createElement('li') //create new li..
            newli.innerText = `${measurments[i]} ${ingredients[i]}`//insert all this into the new div text
            ingredientsContainer.append(newli) //put the new div into the container you want to  show onscreen  
         }
      } 
      
      nameContainer.innerText = cocktailName
      imageContainer.innerHTML = `<img src="${cocktail.strDrinkThumb}">` // insert cocktail image into image container
      instructionsContainer.innerText = instructions
   })

}
 const getSpirit = () => {

 }


document.querySelector('#randomDrink').addEventListener('click', getRandomCocktail); //add click listener then getRandomCocktail

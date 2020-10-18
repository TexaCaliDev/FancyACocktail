# Fancy A Cocktail
### by: Benjamin Roth
Follow my progress on [Trello](https://trello.com/b/NGPGvRZF/fancy-a-cocktail)
--- 
This project is my week one Project for General Assembly. The purpose of this app is to let the user choose a cocktail for their mood. 
It will also list the ingredients/recipe for the cocktail of their choice. or a reference to get help if they think they drink too much.

#### Api Snippets
- Generates a random cocktail
``` https://www.thecocktaildb.com/api/json/v1/1/random.php ```
- generates information about spirit 
```https://www.thecocktaildb.com/api/json/v1/1/search.php?i={spiritName}```
- Gerates cocktail list from spirit
```https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={spiritName} ```
- lookup cocktail details by cocktail id 
```https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={cocktailID} ```

#### What To Expect 
1. upon landing on 'Fancy A Cocktail' , The user will be greeted with a prompt that reads 
'Whats your fancy?' along with three buttons, and an image 
    * one button will read ' Sure! I'd love one', and will lead to the home page
    * One button will read ' I think i'll pass' and will lead you to 'another day' page
    * One button will read ' I think I drink too much' and will lead you to the homepage to an aa website 
2. After clicking the button of their choice, it will redirect them to the desired page.
3. If they get redirected to the home page, they will be greeted with a prompt that reads 'whats your fancy?' and four buttons
    * each button , when clicked , will show a input field and a button related to the criteria of the button clicked
        if the result is clicked, it will alert either a description or ingredients of said beverage
3. if they land on the 'not today' page, they will be greeted with:
    * a witty text
    * a picture
    * and a button that leads them back to landing page

const API_KEY = `1`
const WHISKEY_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?i=whiskey ` 
const SCOTCH_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?i=scotch` 
const VODKA_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?i=vodka ` 
const GIN_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?i=gin ` 
const TEQUILA_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?i=tequila ` 
const body = document.querySelector('body')

const getWhiskey = () => {
    axios.get(WHISKEY_URL)
    .then(response => {

        let spirit = response.data.ingredients[0]
        let spiritInfo = spirit.strDescription
        
        let whiskeyInfo = document.querySelector('.whiskeyInfo')
        let scotchInfo = document.querySelector('.scotchInfo')
        let vodkaInfo = document.querySelector('.vodkaInfo')
        let ginInfo = document.querySelector('.ginInfo')
        let tequilaInfo = document.querySelector('.tequilaInfo')
        
        whiskeyInfo.innerHTML = ''
        scotchInfo.innerHTML = ''
        vodkaInfo.innerHTML = ''
        ginInfo.innerHTML = ''
        tequilaInfo.innerHTML = ''
        
        let infoDiv = document.createElement('div')
        
        infoDiv.innerText = spiritInfo
        
        whiskeyInfo.append(infoDiv)  
        whiskeyInfo.style.backgroundColor = "rgba(255,255,255,.75)"
        whiskeyInfo.style.fontSize = '20px'
        
    })
}

const getScotch = () => {
    axios.get(SCOTCH_URL)
    .then(response => {
        console.log('fuck yourself')
        
        let spirit = response.data.ingredients[0]
        let spiritInfo = spirit.strDescription
        
        let whiskeyInfo = document.querySelector('.whiskeyInfo')
        let scotchInfo = document.querySelector('.scotchInfo')
        let vodkaInfo = document.querySelector('.vodkaInfo')
        let ginInfo = document.querySelector('.ginInfo')
        let tequilaInfo = document.querySelector('.tequilaInfo')
        
        whiskeyInfo.innerHTML = ''
        scotchInfo.innerHTML = ''
        vodkaInfo.innerHTML = ''
        ginInfo.innerHTML = ''
        tequilaInfo.innerHTML = ''
        
        let infoDiv = document.createElement('div')
         
        infoDiv.innerText = spiritInfo
        
        scotchInfo.append(infoDiv)  
        scotchInfo.style.backgroundColor = "rgba(255,255,255,.75)"
        scotchInfo.style.fontSize = "20px"

    })
}

const getVodka = () => {
    axios.get(VODKA_URL)
    .then(response => {
        console.log('fuck yourself')
        
        let spirit = response.data.ingredients[0]
        let spiritInfo = spirit.strDescription
        
        let whiskeyInfo = document.querySelector('.whiskeyInfo')
        let scotchInfo = document.querySelector('.scotchInfo')
        let vodkaInfo = document.querySelector('.vodkaInfo')
        let ginInfo = document.querySelector('.ginInfo')
        let tequilaInfo = document.querySelector('.tequilaInfo')
         
        whiskeyInfo.innerHTML = ''
        scotchInfo.innerHTML = ''
        vodkaInfo.innerHTML = ''
        ginInfo.innerHTML = ''
        tequilaInfo.innerHTML = ''
        
        let infoDiv = document.createElement('div')
        
        infoDiv.innerText = spiritInfo
        
        vodkaInfo.append(infoDiv) 
        vodkaInfo.style.backgroundColor = "rgba(255,255,255,.75)"
        vodkaInfo.style.fontSize = "20px"

    })
}

const getGin = () => {
    axios.get(GIN_URL)
    .then(response => {
        console.log('fuck yourself')
        
        let spirit = response.data.ingredients[0]
        let spiritInfo = spirit.strDescription
        
        let whiskeyInfo = document.querySelector('.whiskeyInfo')
        let scotchInfo = document.querySelector('.scotchInfo')
        let vodkaInfo = document.querySelector('.vodkaInfo')
        let ginInfo = document.querySelector('.ginInfo')
        let tequilaInfo = document.querySelector('.tequilaInfo')
        
        whiskeyInfo.innerHTML = ''
        scotchInfo.innerHTML = ''
        vodkaInfo.innerHTML = ''
        ginInfo.innerHTML = ''
        tequilaInfo.innerHTML = ''
        
        let infoDiv = document.createElement('div')
        
        infoDiv.innerText = spiritInfo
        
        ginInfo.append(infoDiv)  
        ginInfo.style.backgroundColor = "rgba(255,255,255,.75)"
        ginInfo.style.fontSize = "20px"
        
    })
}

const getTequila = () => {
axios.get(TEQUILA_URL)
    .then(response => {
        console.log('fuck yourself')
        
        let spirit = response.data.ingredients[0]
        let spiritInfo = spirit.strDescription
        
        let whiskeyInfo = document.querySelector('.whiskeyInfo')
        let scotchInfo = document.querySelector('.scotchInfo')
        let vodkaInfo = document.querySelector('.vodkaInfo')
        let ginInfo = document.querySelector('.ginInfo')
        let tequilaInfo = document.querySelector('.tequilaInfo')
       
        whiskeyInfo.innerHTML = ''
        scotchInfo.innerHTML = ''
        vodkaInfo.innerHTML = ''
        ginInfo.innerHTML = ''
        tequilaInfo.innerHTML = ''
        
        let infoDiv = document.createElement('div')
        
        infoDiv.innerText = spiritInfo
        
        tequilaInfo.append(infoDiv)  
        tequilaInfo.style.background
        tequilaInfo.style.backgroundColor = "rgba(255,255,255,.75)"
        tequilaInfo.style.fontSize = "20px"
    })
}


document.querySelector('#buttonOne').addEventListener('click', getWhiskey )
document.querySelector('#buttonTwo').addEventListener('click', getScotch )
document.querySelector('#buttonThree').addEventListener('click', getVodka )
document.querySelector('#buttonFour').addEventListener('click', getGin )
document.querySelector('#buttonFive').addEventListener('click', getTequila )
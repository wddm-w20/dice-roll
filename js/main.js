// **** REFERENCES

// querySelect the img.face in the document
const $face = document.querySelector('.face')

// Look for the .result output
const $result = document.querySelector('.result')

// Look for the .roll button
const $btn = document.querySelector('.roll')



// **** LOGIC & FUNCTIONS

const rollTheDice = () => {

	// A random Number between 1 and 6, inclusive
	let roll = Math.floor(Math.random() * 6) + 1

	// Change the value of the `src` attribute of the .face image
	$face.setAttribute('src', `img/dice${roll}.svg`)

	// Change the value of the content within to reflect the new roll
	$result.textContent = roll

}



// **** EVENT LISTENERS

// Listen for the the .roll button to be clicked
$btn.addEventListener('click', rollTheDice)






// // Store the location of an element
// let theH1 = document.querySelector('h1')


// theH1.textContent = 'Hello <em>world</em>'
// theH1.innerHTML   = 'Hello <em>world</em>'



// theH1.style.color = 'yellowgreen'
// // theH1.classList.add('flip')
// theH1.classList.add('bg')
// theH1.setAttribute('title', "Hello world!")


const asdfjkl = require('asdfjkl').default

const input = document.getElementsByTagName("input")[0]
const submitBtn = document.getElementById("submit")
const randomBtn = document.getElementById("random")
const h1 = document.getElementsByTagName("h1")[0]
const h2 = document.getElementsByTagName("h2")[0]
const message = document.getElementById("message")
const body = document.querySelector("body")

const meow = new Audio('media/meow.mp3')
meow.volume = 0.2

const catArray = [
	// ====== STU ======
	"Pikastu",
	"Stu Fast, Stu Furryous",
	"Stupac Shakur",
	"Stuper Bowl",
	"Toaster Studel",
	"Stufasa",
	"Stu-pe Kid's Afraid To Leave His Stu-pe",
	"The Stupe Kitchen",
	"Stupp Dogg",
	"Odd Stuture",
	"Lil Stuzi Vert",
	"Busstu Rhymes",
	"Stufjan Stevens",
	"Instugram",
	"Beef Stu",
	"Stu Pickles",
	"The Three Stuges",
	"Stuzbekistan",
	"Stushi Roll",
	"Stuhammad Ali",
	"Stu Mad, Bro?",
	"Stu Be, Or Not Stu Be",
	"A Tail Of Stu Kitties",
	"Stuplantation",
	"🦉Stuolingo",
	"Freddy Stueger",
	"Stu Years Eve",
	"Stu York City",
	"Stuper Mario Bros.",
	"Bowling For Stu-pe",
	"Studwig Van Beethoven",
	"Stuper Nintendo",
	"Ferris Stueller's Day Off",
	"Lord Of The Rings: The Stu Towers",
	"Stu Kill A Mockingbird",
	"Curb Your Enstusiasm",
	"Black Mirror's 'San Stunipero'",
	"Stu Tang Clan",
	"StuTI",
	"Stuby Doo",
	"Stuber",
	"Stukkake",
	"Kama Stutra",
	"Peek-A-Stu",
	"Lake Havastu",
	"Stubella Virus",
	"Hairy Stoudini",
	"Matisyastu",
	"Stu Apron",
	"Kung Stu Panda",
	"Stu Blood",
	"Stulu",
	"San Diego Stu®",
	"Stu Zealand",
	"Stunited Nations",
	"Le Cordon Stu",
	"Barbestu",
	"Timbukstu",
	"Tiramistu",
	"Stugh Hefner",
	"Get A Stu",
	"Stueless",
	"Orthodox Stu",
	"Disney's Stulan",
	"Stunami",
	"Bird's-Eye Stu",
	"Jiu Jit Stu",
	"Honeystu Melon",
	"Back To The Stuture",
	"Machu Pisstu",
	"Winnie The Stu 🍯",
	"Stutistics",
	"Stucha Libre",
	"Stu Barrymore",
	"Vladimir Stutin",
	"Stulius Caesar",
	"Call Of Stuty",
	"Stuicide Squad",
	"Stuthanasia",
	"Saddam Stussein",
	"HBO's Stuphoria",

	// === STU & PAM ====
	"Stu It For The 'Pam",
	"Pamned If You Stu, Pamned If You Don't",
	"Pamned If I Stu, Pamned If I Don't",
	"I Gotstu, Pam",
	"Instupam Influencer",
	"Pamiel Day-Stuwis",
	"Fluffy Stueberry Pamcakes",
	"Marvel Studios' Black Pamther",
	"Pamdemic Instuenza",

	// ====== PAM ======
	"Childish Pambino",
	"Wham Bam, Thank You Pam",
	"Pam-purrs Diapers",
	"Pammibal Buress",
	"Pamimal Collective",
	"Green Eggs & Pam",
	"Honey-Baked Pam",
	"Pamburger & Fries",
	"Pameron Diaz",
	"Pamelot",
	"Hairy Pawter & The Prizoner Of AzkaPam",
	"Mary Had A Little Pam",
	"Pamsterdam",
	"AbraPam Lincoln",
	"Bernie Pamders",
	"Vincent Pam Gogh",
	"Abracadabra, AlakaPam!",
	"Pam Musubi",
	"Eggplant Pam-igiana",
	"Pamera Bread®",
	"🅿️amdora Radio",
	"Pamazon Prime",
	"Pamic! At The Disco",
	"Lindsay Lopam",
	"xpamster.com",
	"Pineapple & Pam Pizza",
	"Somebody Call The Pambulance",
	"Pampoo & Conditioner",
	"Oh Hot Damn, This Is My Pam",
	"Don't Wanna Be A Pamerican Idiot",
	"Pamic Attack",
	"SpongeBob SquarePams",
	"Pamda 🐼 Express",
	"Pam & Egg Sandwich",
	"Pam & Cheese Sandwich",
	"The Silence Of The Pams",
	"Pam's Labyrinth",
	"Modern Pamily",
	"Pamily Guy",
	"Buffy The Pampire Slayer",
	"International House Of Pamcakes",
	"Sweet Home Alapama",
	"Mipami Beach",
	"The Pamama Canal",
	"Pam-plemousse Flavored La Croix",
	"Pamgaea",
	"Palak Pameer",
	"Pamini Grill",
	"Field Of Pamsies",
	"Pamn, Pamiel!",
	"Eternal Pamnation",
	"Happy As A Pam",
	"Pams Casino",
	"Instapam",
	"Pam I Am",
	"Honey Maid Pam Crackers",
	"Pamma Ray",
	"Rob Van Pam",
	"Candied Pams",
	"Grilled Pam Chops",
	"Pamiel Radcliffe",
	"Pamburger Helper",
	"Marzipam",
	"Pampkin Spice Latte",
	"Pam Helsing",
	"Pam Halen",
	"Pamel Cigarettes"
]

document.onreadystatechange = () => {
	const state = document.readyState
	if (state == "complete") {
    	setTimeout(() => {
        	document.getElementsByClassName("lds-ring")[0].style.display="none"
        	document.getElementById("content").classList.remove("hide")
    	}, 1000)
  	}
}

input.addEventListener("click", () => {
	removeText()
	setTimeout(() => {
		h1.textContent = "Stu•Pam•Dous"
   		h2.textContent = "Try submitting your very own Stu- or Pam-inspired expression!"
   		h2.classList.remove('hide')
   		h2.classList.add('show')
	}, 500)
})

input.addEventListener("keypress", (e) => {
	if (e.keyCode === 13) {
		e.preventDefault()
		submitBtn.click()
	} else {
		return false
	}
})

submitBtn.addEventListener("click", () => {
	const newSubmission = input.value.toLowerCase()
	if (newSubmission.length > 0 && newSubmission.length < 50) {
		if (newSubmission.includes('stu')) {
			if (asdfjkl(newSubmission) === false && newSubmission.length > 3) {
				catPunSubmitted()
				body.classList.add('stu')
				if (body.classList.contains('pam')) {
					body.classList.remove('pam')
				}
			} else if (asdfjkl(newSubmission) === true || newSubmission.length < 4) {
				gibberishDetected()
			}
		} else if (newSubmission.includes('pam')) {
			if (asdfjkl(newSubmission) === false && newSubmission.length > 3) {
				catPunSubmitted()
				body.classList.add('pam')
				if (body.classList.contains('stu')) {
					body.classList.remove('stu')
				}
			} else if (asdfjkl(newSubmission) === true || newSubmission.length < 4) {
				gibberishDetected()
			}
		} else {
			notPamOrStu()
		}
	} else if (newSubmission.length >= 50) {
		tooManyChars()
	} else {
		emptyInput()
	}
})

randomBtn.addEventListener("click", () => {
	removeBackground()
	removeText()

	const random = Math.floor(Math.random() * catArray.length) // randomizes indexes for catArray

	if (catArray[random] == h1.textContent) {
        h1.textContent = "Chop Stuey"
    } else {
		h1.textContent = require("uniq")(catArray)[random] // uniq removes all duplicates from the array, random returns random index number in array
	}

	if (randomBtn.textContent = "Nah, I'm good") {
		randomBtn.textContent = "Randomize"
	}

	input.value = ''
})

const catPunSubmitted = () => {
	meow.play()

	message.textContent = "Submitted"
	message.classList.add('show')
	message.classList.remove('hide')
	setTimeout(() => {
		message.classList.add('hide')
		message.classList.remove('show')
	}, 3000)

	const approvedSubmission = input.value.toLowerCase()
		.split(' ')	// splits a string into an array of substrings using a specified separator (a space)
		.map((pun) => // creates a new array with the results of calling a function on every substring, pun, in the array
			pun.charAt(0).toUpperCase() // capitalize first letter of substring
		 + pun.substring(1)) // then add the capital first letter to the remaining lowercase substring
		.join(' ') // creates a new string by concatenating all the substrings, separated by a space
	catArray.push(approvedSubmission)
	h1.textContent = approvedSubmission
	setTimeout(() => {
		h2.textContent = "Nice one! Would you like to add another pun-derful phrase?"
	}, 400)
	input.value = ''
	randomBtn.textContent = "Nah, I'm good"
}

const notPamOrStu = () => {
	message.textContent = "Error: Your submission must include the name Pam or Stu."
	message.classList.add('show')
	message.classList.remove('hide')
	setTimeout(() => {
		message.classList.add('hide')
		message.classList.remove('show')
	}, 5000)
	input.value = ''
	return false
}

const emptyInput = () => {
	message.textContent = "You have to write something first!"
	message.classList.add('show')
	message.classList.remove('hide')
		setTimeout(() => {
			message.classList.add('hide')
			message.classList.remove('show')
		}, 2000)
	return false
}

const tooManyChars = () => {
	message.textContent = "Error: Your submission must be under 50 characters."
	message.classList.add('show')
	message.classList.remove('hide')
		setTimeout(() => {
			message.classList.add('hide')
			message.classList.remove('show')
		}, 4000)
	return false
}

const gibberishDetected = () => {
	message.innerText = "That wasn't punny. You can stu better than that ☹"
	message.classList.add('show')
	message.classList.remove('hide')
		setTimeout(() => {
			message.classList.add('hide')
			message.classList.remove('show')
		}, 4000)
	input.value = ''
	return false
}

const removeBackground = () => {
	if (body.classList.contains('pam')) {
		body.classList.remove('pam')
	} else if (body.classList.contains('stu')) {
		body.classList.remove('stu')
	}
}

const removeText = () => {
	h2.classList.add('hide')
	message.classList.remove('show')
	message.classList.add('hide')
	h2.classList.remove('show')
}
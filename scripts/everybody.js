const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const everybodyURL = baseURL + endpointSquad;

getData(everybodyURL).then( dataVanIedereen => {
    let everybodySection = document.querySelector("section:nth-of-type(2)")
    let Persons = dataVanIedereen.data;

    Persons.forEach ( person => {

        let personName = person.name;
        let personImg = person.avatar;
        let personWebsite = person.website;

        let getalTussen1en5 = Math.floor(Math.random() * 5) + 1;

        console.log(getalTussen1en5)

        // checken of het een image is 
        if(personImg) {
            // do nothing
        } else {
            personImg = `images/placeholder${getalTussen1en5}.svg`;
            // gebruik een default uit het image mapje
        }


        if(personWebsite) {
            // do nothing
        } else {
            personWebsite ='fallbackWebsite'
            // gebruik een default uit het image mapje
        }

        let personHTML =  `  <article>
      <h3>${person.name}</h3>
      <img src="${personImg}" alt=${person.name}>
      <a href="${personWebsite}" aria-label="de website van Krijn Hoetmer">${person.name}</a>
    </article>`
    // hier maak je nieuwe HTML aan voor alle andere personen 
    // met forEach pas je het aan met het "$"

    everybodySection.insertAdjacentHTML('beforeend', personHTML);
    } )



})













/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }
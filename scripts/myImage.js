getData(myURL).then( data212 => {

    let myAvatar = data212.data.avatar;
    let myName = data212.data.name;

    // console.log(myAvatar)

    let myImg = document.createElement("img");

     myImg.src = myAvatar;
     myImg.alt = myName;

    console.log(myImg);

    let mySection = document.querySelector("section:nth-of-type(1)");
     mySection.appendChild(myImg);

});














/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }
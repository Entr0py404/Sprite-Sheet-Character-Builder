function setupcharacter() {
	//Body
	var characterbody = new Image();
	characterbody.src = "parts/body/body_" + document.getElementById('bodySlider').value + ".png";

	//Pants
	var characterpants = new Image();
	characterpants.src = "parts/pants/pants_" + document.getElementById('pantsSlider').value + ".png";

	//Shirt
	var charactershirt = new Image();
	charactershirt.src = "parts/shirt/shirt_" + document.getElementById('shirtSlider').value + ".png";

	//Shoes
	var charactershoes = new Image();
	charactershoes.src = "parts/shoes/shoes_" + document.getElementById('shoesSlider').value + ".png";

	//Hair
	if (document.getElementById('hairSlider').value > 0) {
		var characterhair = new Image();
		characterhair.src = "parts/hair/hair_" + document.getElementById('hairSlider').value + ".png";
	}

	//Hat
	if (document.getElementById('hatSlider').value > 0) {
		var characterhat = new Image();
		characterhat.src = "parts/hat/hat_" + document.getElementById('hatSlider').value + ".png";
	}

	//Lips
	if (document.getElementById('lipsSlider').value > 0) {
		var characterlips = new Image();
		characterlips.src = "parts/lips/lips_" + document.getElementById('lipsSlider').value + ".png";
	}

	//Eyes
	if (document.getElementById('eyesSlider').value > 0) {
		var charactereyes = new Image();
		charactereyes.src = "parts/eyes/eyes_" + document.getElementById('eyesSlider').value + ".png";
	}

	//glasses
	if (document.getElementById('glassesSlider').value > 0) {
		var characterglasses = new Image();
		characterglasses.src = "parts/glasses/glasses_" + document.getElementById('glassesSlider').value + ".png";
	}


	//Body Loaded
	characterbody.onload = function () {
		buildcharacter();
	}

	//Pants Loaded
	characterpants.onload = function () {
		buildcharacter();
	}

	//Shirt Loaded
	charactershirt.onload = function () {
		buildcharacter();
	}

	//Shoes Loaded
	charactershoes.onload = function () {
		buildcharacter();
	}

	//Hair Loaded
	if (document.getElementById('hairSlider').value > 0) {
		characterhair.onload = function () {
			buildcharacter();
		}
	}

	//Hat Loaded
	if (document.getElementById('hatSlider').value > 0) {
		characterhat.onload = function () {
			buildcharacter();
		}
	}

	//lips Loaded
	if (document.getElementById('lipsSlider').value > 0) {
		characterlips.onload = function () {
			buildcharacter();
		}
	}

	//Eyes Loaded
	if (document.getElementById('eyesSlider').value > 0) {
		charactereyes.onload = function () {
			buildcharacter();
		}
	}

	//Glasses Loaded
	if (document.getElementById('glassesSlider').value > 0) {
		characterglasses.onload = function () {
			buildcharacter();
		}
	}

	function buildcharacter() {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = 64;
		canvas.height = 96;
		//Draw Body
		ctx.drawImage(characterbody, 0, 0);
		//Draw Pants
		ctx.drawImage(characterpants, 0, 0);
		//Draw Shirt
		ctx.drawImage(charactershirt, 0, 0);
		//Draw Shoes
		ctx.drawImage(charactershoes, 0, 0);
		//Hair
		if (document.getElementById('hairSlider').value > 0) {
			ctx.drawImage(characterhair, 0, 0);
		}
		//Draw Hat
		if (document.getElementById('hatSlider').value > 0) {
			ctx.drawImage(characterhat, 0, 0);
		}
		//Lips
		if (document.getElementById('lipsSlider').value > 0) {
			ctx.drawImage(characterlips, 0, 0);
		}
		//Eyes
		if (document.getElementById('eyesSlider').value > 0) {
			ctx.drawImage(charactereyes, 0, 0);
		}
		//Glasses
		if (document.getElementById('glassesSlider').value > 0) {
			ctx.drawImage(characterglasses, 0, 0);
		}
	}

}

function randomizecharacter() {
	//Body
	if (document.getElementById("randomizebody").checked == false) {
		document.getElementById('bodySlider').value = Math.floor(Math.random() * 6) + 1;
		document.getElementById('bodySliderNumberText').innerHTML = document.getElementById('bodySlider').value + '/' + document.getElementById('bodySlider').max;
	}
	//Pants
	if (document.getElementById("randomizepants").checked == false) {
		document.getElementById('pantsSlider').value = Math.floor(Math.random() * 13) + 1;
		document.getElementById('pantsSliderNumberText').innerHTML = document.getElementById('pantsSlider').value + '/' + document.getElementById('pantsSlider').max;
	}
	//Shirt
	if (document.getElementById("randomizeshirt").checked == false) {
		document.getElementById('shirtSlider').value = Math.floor(Math.random() * 27) + 1;
		document.getElementById('shirtSliderNumberText').innerHTML = document.getElementById('shirtSlider').value + '/' + document.getElementById('shirtSlider').max;
	}
	//Shoes
	if (document.getElementById("randomizeshoes").checked == false) {
		document.getElementById('shoesSlider').value = Math.floor(Math.random() * 9) + 1;
		document.getElementById('shoesSliderNumberText').innerHTML = document.getElementById('shoesSlider').value + '/' + document.getElementById('shoesSlider').max;
	}
	//Hair
	if (document.getElementById("randomizehair").checked == false) {
		document.getElementById('hairSlider').value = Math.floor(Math.random() * 47);
		document.getElementById('hairSliderNumberText').innerHTML = document.getElementById('hairSlider').value + '/' + document.getElementById('hairSlider').max;
	}
	//Hat
	if (document.getElementById("randomizehat").checked == false) {
		document.getElementById('hatSlider').value = Math.floor(Math.random() * 10) + 1;
		document.getElementById('hatSliderNumberText').innerHTML = document.getElementById('hatSlider').value + '/' + document.getElementById('hatSlider').max;
	}
	//Lips
	if (document.getElementById("randomizelips").checked == false) {
		document.getElementById('lipsSlider').value = Math.floor(Math.random() * 12);
		document.getElementById('lipsSliderNumberText').innerHTML = document.getElementById('lipsSlider').value + '/' + document.getElementById('lipsSlider').max;
	}
	//Eyes
	if (document.getElementById("randomizeeyes").checked == false) {
		document.getElementById('eyesSlider').value = Math.floor(Math.random() * 6);
		document.getElementById('eyesSliderNumberText').innerHTML = document.getElementById('eyesSlider').value + '/' + document.getElementById('eyesSlider').max;
	}
	//Glasses
	if (document.getElementById("randomizeglasses").checked == false) {
		document.getElementById('glassesSlider').value = Math.floor(Math.random() * 5);
		document.getElementById('glassesSliderNumberText').innerHTML = document.getElementById('glassesSlider').value + '/' + document.getElementById('glassesSlider').max;
	}

	setupcharacter();
}

function saveImage() {
	var tempname = "";
	var test = document.querySelectorAll('[class=slider]'), i;
	for (i = 0; i < test.length; ++i) {
		tempname += "-" + test[i].value;
	}
	var download = document.getElementById("download");
	download.download = "Sprite_Sheet_Character" + tempname + ".png"
	var imageurl = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.setAttribute("href", imageurl);
}

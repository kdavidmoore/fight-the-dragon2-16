	// Dice roller.
	function throwDice(){
		var randomDie = Math.round(Math.random()*5)+1; //This will produce a number between 1 - 6.
		var imageName = "d" + randomDie + ".gif";
		document.images['myDie1'].src = imageName;
		//Get another number
		randomDie2 = Math.round(Math.random()*5)+1; 
		var imageName2 = "d" + randomDie2 + ".gif";
		document.images['myDie2'].src = imageName2;
	}

	document.getElementById("message").innerHTML = "You have encountered a dragon..."

	console.log(document.getElementById("message"));

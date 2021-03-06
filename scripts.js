function stayAndFight(){
	var changeMessage = document.getElementById("message");
	changeMessage.innerHTML = "Very well. You must roll a total of 9 or higher; else you will be burnt to a crisp."
	var removeOneButton = document.getElementById("fight-button");
	removeOneButton.style.display = "none";
	var removeOtherButton = document.getElementById("run-away-button");
	removeOtherButton.style.display = "none";
	var showRollButton = document.getElementById("roll-button");
	showRollButton.style.display = "inline";
}

function throwDice(){
	var randomDie = Math.round(Math.random()*5)+1; //This will produce a number between 1 - 6.
	var imageName = "d" + randomDie + ".gif";
	document.images["myDie1"].src = imageName;

	randomDie2 = Math.round(Math.random()*5)+1; 
	var imageName2 = "d" + randomDie2 + ".gif";
	document.images["myDie2"].src = imageName2;
	
	var changeMessage = document.getElementById("message");
	if (randomDie + randomDie2 >= 9) {
		changeMessage.innerHTML = "You slew the dragon and lived to tell the tale!";
	} else {
		changeMessage.innerHTML = "You fought valiantly but were burnt to a crisp.";
	}
}

function runAway(){
	var theDragon = document.getElementById("dragon");
	theDragon.style.display = "none";
	var thePeon = document.getElementById("fleeing-peon");
	thePeon.style.display = "block";
	var changeMessage = document.getElementById("message");
	var removeOtherButton = document.getElementById("fight-button");
	removeOtherButton.style.display = "none";
	changeMessage.innerHTML = "Run away, you coward!";
}

var theMessage = document.getElementById("message");
theMessage.innerHTML = "You have encountered a dragon...You must either fight or flee. Which do you choose?";

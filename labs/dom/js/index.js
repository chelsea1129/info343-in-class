"use strict";

var boxOne = document.querySelector('#one'),
	boxTwo = document.querySelector('#two'),
	boxThree = document.querySelector('#three'),
	boxFour = document.querySelector('#four'),
	boxFive = document.querySelector('#five'),
	boxSix = document.querySelector('#six');

boxOne.addEventListener("click", function(event){
	// console.log("box one clicked");
	boxOne.classList.add("spin");
	setTimeout(function(){boxOne.classList.remove("spin")},1000);
	// if(boxOne.classList.contains("spin")){
	// 	boxOne.classList.remove("spin");
	// } else {
	// 	boxOne.classList.add("spin");
	// }
})

window.onload = function(){

var exp = 0

var questionOne ={
	text:"Who was infamous for stabbing Cab Calloway?",
	answers:[
				{text: "Dizzy Gillespie", correct: "true"},
				{text: "Fats Navarro", correct: "false"},
				{text: "Jonah Jones", correct: "false"},
				{text: "Billie Holiday", correct: "false"}
				],
};

var questionTwo={
	text: "While serving as Vice President, Richard Nixon unknowingly smuggled a suitcase containing three pounds of cannabis through customs for this American jazz musician and goodwill ambassador:",
	answers:[
				{text: "Cedar Walton", correct: "false"},
				{text: "Chet Baker", correct: "false"},
				{text: "Louis Armstrong", correct: "true"},
				{text: "Ella Fitzgerald", correct: "false"}
				],
};

$("#question").html("<p>" +  questionOne.text + "</p>");

for (var i = 0; i < questionOne.answers.length; i++){
	$("#answers").append("<button class='" + questionOne.answers[i].correct + "'>" + questionOne.answers[i].text + "</button>");
};

$(".next").click(function(){
	$("#game").html("asdfas");
});

$(".false").click(function(){
	$("#game").html("<h2>Incorrect.</h2><button class='next'>Next Question </button>");
});

$(".true").click(function(){
	$("#game").html("<div><img src='assets/images/hamsters.gif'/></div><h2>You right!</h2><button class='next'>Next Question </button>");
	exp += 2000;
});


}

//function answers(){
//	if (false){
//		$("#game").html("<p>You wrong!</p>");
//	}
//	else if (true){
//		$("#game").html("<p>You right...</p>");
//	}
//};
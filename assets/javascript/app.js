var timer = 60;

var questionOne ={
	text:"Which jazz musician was infamous for stabbing Cab Calloway in the butt?",
	answers:[
				{text: "Dizzy Gillespie", correct: true},
				{text: "Fats Navarro", correct: false},
				{text: "Jonah Jones", correct: false},
				{text: "Billie Holiday", correct: false}
				],
};

var questionTwo={
	text: "While serving as Vice President, Richard Nixon unknowingly smuggled a suitcase containing three pounds of cannabis through customs for this American jazz musician and goodwill ambassador:",
	answers:[
				{text: "Cedar Walton", correct: false},
				{text: "Chet Baker", correct: false},
				{text: "Louis Armstrong", correct: true},
				{text: "Ella Fitzgerald", correct: false}
				],
};

$("#question").html("<p class='question'>" +  questionOne.text + "</p>");

for (i = 0; i < questionOne.answers.length; i++){
	$("#answers").append("<button class='answer'>" + questionOne.answers[i].text + "</button>");
}

	

	
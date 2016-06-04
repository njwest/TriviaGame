
window.onload = function(){
	$('.timer').ready(timer.start);
};

var timer ={
    time:60,
    //lap:1,
    reset: function () {
        timer.time = 0;
        $('.timer').html('00:60');
    },
    start: function(){
        count = setInterval(timer.count, 1000);
    },
    stop: function(){
        clearInterval(count);
    },
    count: function(){
        timer.time--;
        var currentTime2 = timer.timeConverter(timer.time);
        $('.timer').html(currentTime2);
    },
    timeConverter: function(t){
        //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};

var exp = 0

var questionOne ={
	text:"Who infamously stabbed Cab Calloway?",
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

$(".question").html("<p>" +  questionOne.text + "</p>");

for (var i = 0; i < questionOne.answers.length; i++){
	$(".answers").append("<button class='" + questionOne.answers[i].correct + "'>" + questionOne.answers[i].text + "</button>");
};

$(".next").click(function(){
	$(".game").html("asdfas");
});

$(".false").click(function(){
	$(".game").html("<h2>Incorrect.</h2><button class='next'>Next Question </button>");
});

$(".true").click(function(){
	$(".game").html("<div><img src='assets/images/hamsters.gif'/></div><h2>You right!</h2><button class='next'>Next Question </button>");
	exp += 2000;
});




//function answers(){
//	if (false){
//		$("#game").html("<p>You wrong!</p>");
//	}
//	else if (true){
//		$("#game").html("<p>You right...</p>");
//	}
//};
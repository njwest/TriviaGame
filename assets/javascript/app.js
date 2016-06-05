window.onload = function(){
	$('#button').click(quizGame.questionGen);
};

var q = 0;
var exp = 0;
var quizGame = {
	time: 60,
	start: function(){
        count = setInterval(quizGame.count, 1000);
    },
   stop: function(){
        clearInterval(count);
    },
   count: function(){
      quizGame.time--;
      var currentTime2 = quizGame.timeConverter(quizGame.time);
      $('#timer').html(currentTime2);
    },
    //skip is currently nonfunctional
   countReset: function () {
        
    },
   timeConverter: function(t){
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
    },

	question: ["Of the following Jazz musicians, who stabbed Cab Calloway?",
					"While serving as Vice President, Richard Nixon unknowingly smuggled a suitcase containing three pounds of cannabis through customs for this American jazz ambassador:",
					],
	answers: [
					[
						["Dizzy Gillespie", true],
						["Fats Navarro", false],
						["Jonah Jones", false],
						["Billie Holiday", false]
					],
					[
						["Cedar Walton", false],
						["Chet Baker", false],
						["Louis Armstrong", true],
						["Ella Fitzgerald", false]
					]

				],
	questionGen: function () {
		$("#answers").empty();
		console.log(quizGame.question[q]);
   	count = setInterval(quizGame.count, 1000);
   	$("#button").empty();
   	$("#question").html("<div>" + quizGame.question[q] + "</div>");
   	for(var i = 0; i < quizGame.answers[q].length; i++){
			$("#answers").append("<div><button class='" + quizGame.answers[q][i][1] + "'>" + quizGame.answers[q][i][0] + "</button></div>");
   	 };
   	$(".true").click(function(){
   		$("#question").html("<h2>Correct!</h2>")
   		$("#answers").html("<img width='75%' src='assets/images/hamsters.gif'/>");
   		$("#button").html("<button id='start'>Next Question </button>");
   		quizGame.time = 60;
        $('#timer').html('00:60');
   		exp += 2000;
   	});
   	$(".false").click(function(){
   		$("#question").html("<h2>Incorrect!</h2>")
   		$("#answers").html("<img width='75%' src='assets/images/hamsters.gif'/>");
			$("#button").html("<button id='start'>Next Question </button>");
			quizGame.time = 60;
        	$('#timer').html('00:60');
		});
   	q++;

	}
	
};
	$('#next').click(quizGame.questionGen);

	 
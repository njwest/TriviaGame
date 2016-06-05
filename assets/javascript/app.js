window.onload = function(){
	$('#button').click(quizGame.questionGen);
	$('#results').click(quizGame.results);

};


var q = 0;
var exp = 0;
var wrongAnswers = 0;
var rightAnswers = 0;
function results(){
	$("#question").append("<h1>You got " + rightAnswers + "/" + quizGame.question.length + " answers right.");
	q = 0;
	exp = 0;
	wrongAnswers = 0;
	rightAnswers = 0;
	$("#button").html("<button id='start'>Restart</button>");
	setTimeout(function(){console.log(hi);}, 60000000);
};

var quizGame = {
	time: 60,
	start: function(){
        count = setInterval(quizGame.count, 1000);
        
    },
   count: function(){
      quizGame.time--;
      var currentTime2 = quizGame.timeConverter(quizGame.time);
      $('#timer').html(currentTime2);
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

	question: ["Who was infamous for stabbing Big Band leader Cab Calloway?",
					"While serving as Vice President, Richard Nixon unknowingly smuggled a suitcase containing three pounds of cannabis through customs for this American jazz ambassador:",
					"The best-selling jazz album of all time is:",
					"Which of the following is not considered a style of jazz:",
					"Who of the following jazz musicians was not born in New Jersey:",
					"Who is playing the background music for this quiz game?"
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
					],
					[
						["Dave Brubeck - Time Out", false],
						["Miles Davis - Kind of Blue", true],
						["Herbie Hancock - Head Hunters", false],
						["John Coltrane - Blue Train", false]
					],
					[
						["Modal", false],
						["Hard bop", false],
						["Diddle bop", true],
						["Cool", false]
					],
					[
						["Esperanza Spalding", true],
						["Bill Evans", false],
						["Joe Pass", false],
						["Wayne Shorter", false]
					],
					[
						["Art Tatum", false],
						["Art Blakey", false],
						["Horace Silver", false],
						["Bud Powell", true]
					]
				],
	questionGen: function () {
		$("#answers").empty();
		console.log(quizGame.question[q]);
		quizGame.time = 60;
   	count = setInterval(quizGame.count, 1000);
   	setTimeout(function(){
        	$("#question").html("<h2>You're out of time...</h2>");
        	$("#answers").html('<img width="50%" src="assets/images/time.gif"/>');
        	if(q === quizGame.question.length){
   			$("#question").html("<h2>You're out of time...</h2>")
   			results();
   		} else{
   		$("#button").html("<button id='start'>Next Question </button>");
   		};
        	quizGame.time = 60;
   		clearInterval(count);
         $('#timer').html('01:00');
        		}, 
        	60000);
   	$("#button").empty();
   	$("#question").html("<div>" + quizGame.question[q] + "</div>");
   	for(var i = 0; i < quizGame.answers[q].length; i++){
			$("#answers").append("<div><button class='" + quizGame.answers[q][i][1] + "'>" + quizGame.answers[q][i][0] + "</button></div>");
   	 };
   	$(".true").click(function(){
   		$("#question").html("<h2>Correct!</h2>");
   		$("#answers").html("<img width='50%' src='assets/images/" + q + ".gif'/>");
   		if(q === quizGame.question.length){
   			$("#question").html("<h2>Correct!</h2>")
   			results();
   		} else{
   		$("#button").html("<button id='start'>Next Question </button>");
   		};
   		quizGame.time = 60;
   		clearInterval(count);
        $('#timer').html('01:00');
   		exp += 2000; 
   		rightAnswers += 1;
   	});
   	$(".false").click(function(){
   		$("#question").html("<h2>Incorrect!</h2>")
   		$("#answers").html("<img width='50%' src='assets/images/" + q + ".gif'/>");
			if(q === quizGame.question.length){
   			$("#question").html("<h2>Incorrect!</h2>");
   			results();
   		} else{
   		$("#button").html("<button id='start'>Next Question </button>");
   		};
			quizGame.time = 60;
        	$('#timer').html('01:00');
        	clearInterval(count);
        	wrongAnswers += 1;
		});
   	q++;
	},
};

	 	
//edited code from stopwatch
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {

  // $("#lap").on("click", countdown.recordLap);
   // $("#stop").on("click", countdown.stop);
  // $("#reset").on("click", countdown.reset);
  $("#display").html(countdown.start);
};

//  Variable that will hold our setInterval that runs the countdown
var intervalId;

// Our countdown object
var countdown = {

  time: 30,
  lap: 1,

  // reset: function() {

  //   stopwatch.time = 0;
  //   stopwatch.lap = 1;

  //   // DONE: Change the "display" div to "00:00."
  //   $("#display").html("00:00");

  //   // DONE: Empty the "laps" div.
  //   $("#laps").html("");
  // },
  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(countdown.count, 1000);

  },
  // recordLap: function() {

  //   // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
  //   //       and save the result in a variable.
  //   var converted = stopwatch.timeConverter(stopwatch.time);

  //   // DONE: Add the current lap and time to the "laps" div.
  //   $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

  //   // DONE: Increment lap by 1. Remember, we can't use "this" here.
  //   stopwatch.lap++;
  // },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    countdown.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = countdown.timeConverter(countdown.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
  //   stop: function() {

  //     if (minutes===0&&seconds===0) 
  //       clearInterval(intervalId);
         
  // },

};

var questions = new Array();
questions[0] = 'Which two NFL players are the only ones with 5 Super Bowl rings?',
questions[1] = 'Which NBA player has the most NBA Finals rings?',
questions[2] = 'Which current MLB team has the longest World Series drought?';

var choices = new Array();
choices[0] = ['Tom Brady and Joe Montana', 'Joe Montana and Terry Bradshaw', 'Tom Brady and Terry Bradshaw', 'Tom Brady and Charles Haley'],
choices[1] = ['Michael Jordan', 'Kobe Bryant', 'Bill Russell', 'Tim Duncan'],
choices[2] = ['Miami Marlins', 'Cleveland Indians', 'Chicago Cubs', 'Seattle Mariners'];

var answers = new Array();
answers[0] = ['Tom Brady and Charles Haley'],
answers[1] = ['Tim Duncan'],
answers[2] = ['Cleveland Indians'];

var score = 0;
i= 0;

var listQuestion = function(){  
    if(i<questions.length){
        $("#myDiv1").html('<p>'+questions[i]+'</p>');
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices[i].length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+choices[i][k]+'</p>');
        }
        $("#myDiv2").html(choicesOutput.join(""));
        $("#myDiv3").html('<p><button onClick = "getRadioValue()">Check</button></p> <br>') 
            ;
    }
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
        }
    }
    if (value== answers[i]){
        $("#myDiv4").html("That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>")
            ;
    }
    else {
        $("#myDiv4").html("That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
           +"ext Question</button>"); 
    }
    i++;
};

function loadContent(){
    $("#myDiv4").html("");
    listQuestion();
}

$("#display").append(listQuestion)

//pls work

// $("#display").append(score)


// Solution if you choose not to put it in an object

// var time = 0;
// var lap = 1;
// function reset() {

//   time = 0;
//   lap = 1;

//   $("#display").html("00:00");
//   $("#laps").html("");

// }

// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {

//   console.log("stopping");
//   clearInterval(intervalId);

// }

// function recordLap() {

//   var converted = timeConverter(time);
//   $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
//   lap++;

// }

// function count() {

//   time++;
//   var converted = timeConverter(time);
//   $("#display").html(converted);

// }

// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   return minutes + ":" + seconds;
// }

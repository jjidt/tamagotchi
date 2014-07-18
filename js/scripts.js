
var Tamagotchi = {initialize: function(inputName){
                    this.name = inputName;
                    this.foodLevel = 10;
                    this.sleepLevel = 10;
                    this.activityLevel = 10;
                    },
                  isAlive: function(){
                    return this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0;
                  },
                  timePasses: function(){
                    this.foodLevel -= 1;
                    this.sleepLevel -= 1;
                    this.activityLevel -= 1;
                  },

};

var speed = 700;

$(document).ready(function(){
  var command;


  var showLevels = function(){
    $("#food").text(myToma.foodLevel)
    $("#sleep").text(myToma.sleepLevel)
    $("#activity").text(myToma.activityLevel)
  };

  var myToma = Object.create(Tamagotchi);
  myToma.initialize("steve");
  $(document).click(function(){
    $("#text-input").focus();
  });

  showLevels();

  $("#text-input").focus();

  $("#user-type").submit(function(event){
    event.preventDefault();
    command = $("#text-input").val();
    if(command === "eat") {
      myToma.foodLevel += 10;
    } else if(command === "sleep") {
      myToma.sleepLevel += 10;
    } else if(command === "run") {
      myToma.activityLevel += 10;
    }
    $("#text-input").val("");
    showLevels();
  });

  var interval = function(){
    myToma.foodLevel -= 1;
    myToma.sleepLevel -= 1;
    myToma.activityLevel -= 1;
    showLevels();
    if(speed > 100) {
      speed -= 4;
    };
    console.log(speed);
  };
  var timer;
  (function repeat() {
    interval();
    timer = setTimeout(repeat, speed);
  })();

});

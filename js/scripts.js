
var Tamagotchi = {initialize: function(inputName){
                    this.name = inputName;
                    this.foodLevel = 10;
                    this.sleepLevel = 10;
                    this.activityLevel = 10;
                    },
                  isAlive: function(){
                    return this.foodLevel > 0;
                  },
                  timePasses: function(){
                    this.foodLevel -= 1;
                  },

}



function dwarfRollCall(dwarves) {
  
  var dwarvesString = "";
  var empty = [];
  for(var i = 0; i < dwarves.length; i++) {
  

     dwarvesString +=`${i + 1}. ${dwarves[i]} `;
    
}

return  dwarvesString;



 
}

function summonCaptainPlanet(planeteerCalls){
  var empty = [];
  var string = "";
  var upperString = "";
  for(var i = 0; i < planeteerCalls.length; i++) {
  string = `${planeteerCalls[i]}!`;
  upperString = string.toUpperCase();


  empty.push(upperString);
  
  
}
  return empty;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i ++) {
  if (words[i].length > 4) {
  
    return true;
  }else {
    return false;
  }
  }
}

function findTheCheese (foods) {

  var cheese = "cheddar";
    for (var i = 0; i < foods.length; i++) {
        if (foods[i] === cheese) {
            return "cheddar";
        }
    }
    return "no cheese!";



}

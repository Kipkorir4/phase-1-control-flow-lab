function scuberGreetingForFeet(rideFeet){
  if(rideFeet > 2500){ 
    scuberGreetingForFeet='No can do.'
    return scuberGreetingForFeet
  }

  else if(rideFeet <= 400){
    scuberGreetingForFeet='This one is on me!'
    return scuberGreetingForFeet
  }

  else if(rideFeet > 2000){
    scuberGreetingForFeet='I will gladly take your thirty bucks.'
    return scuberGreetingForFeet
  }

  else if(rideFeet > 400 <= 2000){
    scuberGreetingForFeet='That will be twenty bucks.'
    return scuberGreetingForFeet
  }
  
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":  
      return "Thank you."
    default:
      return "Bye.";
  }
}
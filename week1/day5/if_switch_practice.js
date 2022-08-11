const wuTangMember = prompt("tell me your favourite member and I will tell you where is he/she from?");
let neighborhood = "";
switch (wuTangMember) {
    case "Rza":
    case "Ghostface Killah":
        neighborhood = "Staten Island, New York";
        break
    case "Gza":
    case "Raekwon":  
    case "Inspectah Deck":
    case "Masta Killa":    
        neighborhood = "Brooklyn, New York";
        break
    case "Ol' Dirty Bastard ":
        neighborhood = "Fort Greene";
        break
    case "Method Man":
        neighborhood = "Hempstead, New York";
        break
}

console.log(`Your favorite Wu Tang Member is from ${neighborhood}.`);
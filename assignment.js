
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}


function brickCalculatorn(flor) {
    var totalFlor = flor;
    var total;
    if (totalFlor <= 10) {
        var result1 = console.log(totalFlor * 15000);
    }
        else if (totalFlor <= 20) {
        var result2 = console.log(totalFlor * 12000);
        } 
        else if (totalFlor > 20) {
        var result3 = console.log(totalFlor * 10000);
        }

    else {"plese give valid number"}

    var total = result1 + result2 + result3;
    return total;
  }


  function tinyFriend(names){
    var tinyName = names[0];
    for(var i = 0; i < names.length; i++){
        var friend = names[i];
        if(friend.length < tinyName.length){
            tinyName = friend;
        }
    }
    return tinyName;
}
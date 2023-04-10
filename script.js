function randomizer(){
    var num1, num2, num3;
    num1 = Math.ceil(Math.random() *20);
    num2 = Math.ceil(Math.random()*20);
    num3 = Math.ceil(Math.random() *20);
    return{
        number1: num1,
        number2: num2,
        number3: num3
    }
}

function main(){

    var num1, num2, num3,mins;
    const nationName= [
        "Mondstadt",
        "Liyue",
        "Inazuma",
        "Sumeru",
        "Fontaine",
        "Natlan",
        "bMondstadt",
        "cLiyue",
        "dInazuma",
        "eSumeru",
        "gNatlan",
        "hMondstadt",
        "jLiyue",
        "kInazuma",
        "Natlan",
        "oNatlan",
        "pSneznaya",
        "qMondstadt",
        "rLiyue",
        "tInazuma",
        "uSumeru",
        "vFontaine",
        "wNatlan",
        "xMondstadt",
        "yLiyue",
        "zSneznaya"
    ];
    num1 = randomizer().number1;
    num2 = randomizer().number2;
    num3 = randomizer().number3;
    mins = num2*num3;
    edit(num1, num2, num3, mins, nationName[num1-1], highestNum(num1,num2,num3)); 
}


function edit(electroID, dendroID, hydroID, multiply, nation, largestNum){
    document.getElementById("electroDS").innerHTML+=electroID;
    document.getElementById("dendroDS").innerHTML+=dendroID;
    document.getElementById("hydroDS").innerHTML+=hydroID;
    document.getElementById("minutes").innerHTML+=+multiply+" minutes to beat or "+Math.floor(multiply / 60)+"hrs and "+multiply%60+"mins";
    document.getElementById("kingdomName").innerHTML+=nation +" by the letter "+nation.charAt(0);
    document.getElementById("highDPS").innerHTML+= largestNum;
}

function highestNum(num1, num2, num3){
    var largestNum = Math.max(num1, num2, num3);
    var stringShow;
    if(num1==num2&& largestNum == num1){
        stringShow = "A tie! Electro ("+num1+") and Dendro ("+num2+")";
    }else if(num1 == num3 &&largestNum == num1){
        stringShow = "A tie! Electro ("+num1+") and Hydro  ("+num3+")";
    }else if(num2 == num3 && largestNum == num2){
        stringShow = "A tie! Dendro ("+num2+") and Hydro("+num3+")";
    }else if(largestNum == num2){
        stringShow = "Dendro ("+largestNum+")";
    }else if(largestNum == num3){
        stringShow = "Hydro ("+largestNum+")";
    }else if(largestNum == num1){
        stringShow = "Electro ("+largestNum+")";
    }
    return stringShow;
}
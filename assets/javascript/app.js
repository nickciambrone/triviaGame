var count=45;
var intervalId;
var countDown=function(){
    
    if (count<2){
        var screens=["<div id='quiz'><h1>What did Arya Stark say to Walder Frey's daughter after killing their entire house?</h1><input type='radio' id='wrong' name=a>'The Starks send their regards'</input><input type='radio' id='right' name=a>'Tell them Winter came for house Frey'</input><input type='radio' id='wrong' name=a>'Your family was on my list'</input><input type='radio' id='wrong' name=a>'What is dead may never die'</input><br><br><br><h1>What are the names of Denary's 3 dragons?</h1><input type='radio' id='wrong' name=b>Drogon, Vyseris, Volantis </input><input type='radio' id='wrong' name=b>Drogon, Visenya, Roaegon</input><input type='radio' id='wrong' name=b>Raehgar, Draegon, Viserieon</input><input type='radio' id='right' name=b>Drogon, Rhaegal, Viserion</input><br><br><br><h1>Who was the first person on Arya Stark's list?</h1><input type='radio' id='right'>Meryn Trant</button><input type='radio' id='wrong'>Tywin Lannister</button><input type='radio' id='wrong'>The Hound</button><input type='radio' id='wrong'>Joffrey Baratheon</button><br><br><br><h1>Who was Ser Barriston's squire?</h1><input type='radio' id='wrong'>Podrick</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='right'>Jamie Lannister</button><input type='radio' id='wrong'>Lansel Lannister</button><br><br><br><h1>Who is the writer of G.O.T. novels</h1><input type='radio' id='wrong'>George M. M. Martin</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='wrong'>Jamie Lannister</button><input type='radio' id='right'>George R. R. Martin</button><br><br><br><h1>Who is the rightful King of the Andals, Ruler of The Seven Kingdoms and Protector of The Realm?</h1><input type='radio' id='wrong'>Denarys</button><input type='radio' id='wrong'>Jon</button><input type='radio' id='wrong'>Cersei</button><input type='radio' id='right'>Gendry</button><br><br><br><input id='submit' type='submit'>", "<div id='timesUp'>Times UP!</br> Correct: " + right + " " + "</br>Incorrect: " + wrong+"</div","<div id='timesUp'>Quiz complete!</br>"+"Correct: "+right + "</br>Incorrect: "+wrong+"</br>Unanswered: "+ 6-wrong-right ]

        clearInterval(intervalId);
        $("#screen").html(screens[1])
        $("#intro").html("")
    }

    count--;

    $("#intro").html("Time Left: "+count)
  
}
var right=0;
var wrong=0;
var start = function (){
    $("#intro").html("Time Left: "+count)
    var screens=["<div id='quiz'><h1>What did Arya Stark say to Walder Frey's daughter after killing their entire house?</h1><input type='radio' id='wrong' name=a>'The Starks send their regards'</input><input type='radio' id='right' name=a>'Tell them Winter came for house Frey'</input><input type='radio' id='wrong' name=a>'Your family was on my list'</input><input type='radio' id='wrong' name=a>'What is dead may never die'</input><br><br><br><h1>What are the names of Denary's 3 dragons?</h1><input type='radio' id='wrong' name=b>Drogon, Vyseris, Volantis </input><input type='radio' id='wrong' name=b>Drogon, Visenya, Roaegon</input><input type='radio' id='wrong' name=b>Raehgar, Draegon, Viserieon</input><input type='radio' id='right' name=b>Drogon, Rhaegal, Viserion</input><br><br><br><h1>Who was the first person on Arya Stark's list?</h1><input type='radio' id='right'>Meryn Trant</button><input type='radio' id='wrong'>Tywin Lannister</button><input type='radio' id='wrong'>The Hound</button><input type='radio' id='wrong'>Joffrey Baratheon</button><br><br><br><h1>Who was Ser Barriston's squire?</h1><input type='radio' id='wrong'>Podrick</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='right'>Jamie Lannister</button><input type='radio' id='wrong'>Lansel Lannister</button><br><br><br><h1>Who is the writer of G.O.T. novels</h1><input type='radio' id='wrong'>George M. M. Martin</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='wrong'>Jamie Lannister</button><input type='radio' id='right'>George R. R. Martin</button><br><br><br><h1>Who is the rightful King of the Andals, Ruler of The Seven Kingdoms and Protector of The Realm?</h1><input type='radio' id='wrong'>Denarys</button><input type='radio' id='wrong'>Jon</button><input type='radio' id='wrong'>Cersei</button><input type='radio' id='right'>Gendry</button><br><br><br><input id='submit' type='submit'>", "<div id='timesUp'>Times UP!</br> Correct: " + right + " " + "</br>Incorrect: " + wrong+"</div","<div id='timesUp'>Quiz complete!</br>"+"Correct: "+right + "</br>Incorrect: "+wrong+"</br>Unanswered: "+ 6-wrong-right ]
    $("#screen").html(screens[0])
    intervalId=setInterval(countDown,1000)

    var wrongUp=function(){
        console.log("hello")
    wrong++
    console.log(wrong)
}
    $(document).on("click","#wrong",wrongUp)
    $("#submit").click(submit)
    
}
var rightUp=function(){
    console.log("hello")
right++
console.log(right)
}
$(document).on("click","#right",rightUp)
$("#submit").click(submit)





console.log(wrong)
$("#begin").click(start)
var submit=function(){
    clearInterval(intervalId);
    $("#intro").html("")
    var screens=["<div id='quiz'><h1>What did Arya Stark say to Walder Frey's daughter after killing their entire house?</h1><input type='radio' id='wrong' name=a>'The Starks send their regards'</input><input type='radio' id='right' name=a>'Tell them Winter came for house Frey'</input><input type='radio' id='wrong' name=a>'Your family was on my list'</input><input type='radio' id='wrong' name=a>'What is dead may never die'</input><br><br><br><h1>What are the names of Denary's 3 dragons?</h1><input type='radio' id='wrong' name=b>Drogon, Vyseris, Volantis </input><input type='radio' id='wrong' name=b>Drogon, Visenya, Roaegon</input><input type='radio' id='wrong' name=b>Raehgar, Draegon, Viserieon</input><input type='radio' id='right' name=b>Drogon, Rhaegal, Viserion</input><br><br><br><h1>Who was the first person on Arya Stark's list?</h1><input type='radio' id='right'>Meryn Trant</button><input type='radio' id='wrong'>Tywin Lannister</button><input type='radio' id='wrong'>The Hound</button><input type='radio' id='wrong'>Joffrey Baratheon</button><br><br><br><h1>Who was Ser Barriston's squire?</h1><input type='radio' id='wrong'>Podrick</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='right'>Jamie Lannister</button><input type='radio' id='wrong'>Lansel Lannister</button><br><br><br><h1>Who is the writer of G.O.T. novels</h1><input type='radio' id='wrong'>George M. M. Martin</button><input type='radio' id='wrong'>Matthew Dellevedova</button><input type='radio' id='wrong'>Jamie Lannister</button><input type='radio' id='right'>George R. R. Martin</button><br><br><br><h1>Who is the rightful King of the Andals, Ruler of The Seven Kingdoms and Protector of The Realm?</h1><input type='radio' id='wrong'>Denarys</button><input type='radio' id='wrong'>Jon</button><input type='radio' id='wrong'>Cersei</button><input type='radio' id='right'>Gendry</button><br><br><br><input id='submit' type='submit'>", "<div id='timesUp'>Times UP!</br> Correct: " + right + " " + "</br>Incorrect: " + wrong+"</div","<div id='timesUp'>Quiz complete!</br>"+"Correct: "+right + "</br>Incorrect: "+wrong ]
    $("#screen").html(screens[2])
    
}



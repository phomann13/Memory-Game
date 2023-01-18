let gameStart = 1;
let cardsselected = [];
let buttonsclicked = [];
let guessesleft;
let match = false;
let matches;

let butterfly = "https://img.freepik.com/free-vector/sticker-design-with-beautiful-butterfly-isolated_1308-76922.jpg?w=2000"
let dog = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgr0fiLQjnDrYkTQiYL4eLzhzx98WZwEf365hF6hsTA&s"
let ladybug = "https://w7.pngwing.com/pngs/646/561/png-transparent-beetle-ladybird-drawing-ladybug-cartoon-s-photography-smiley-snout-thumbnail.png"
let cat = "https://www.creativefabrica.com/wp-content/uploads/2021/10/18/Comic-Cartoon-Cat-Sticker-18-Graphics-18955531-1.jpg"
let fox = "https://t4.ftcdn.net/jpg/01/07/46/09/360_F_107460996_O9kFR1nFQtfJRc8qUEHgXi8dMcOrCfwR.jpg"
let frog = "https://media.istockphoto.com/id/1334993248/vector/green-frog-on-a-white-background.jpg?s=612x612&w=0&k=20&c=rAUHg_DzEFy0sJldKiH7mMQ7yT7iotCgyt8fj0I8asg="

let racoon = "https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4"
let duck = "https://static.vecteezy.com/system/resources/previews/003/481/904/original/baby-duck-cartoon-cute-isolated-free-vector.jpg"
let squirell = "https://static.vecteezy.com/system/resources/previews/005/356/906/original/funny-cartoon-squirrel-free-vector.jpg"
let lemur = "https://ih1.redbubble.net/image.311973327.7109/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
let gerbil = "https://w7.pngwing.com/pngs/111/483/png-transparent-hamster-gerbil-cartoon-the-hampsterdance-song-others-pet-cartoon-snout.png"
let chicken = "https://st.depositphotos.com/1724125/3542/v/950/depositphotos_35429731-stock-illustration-fat-cartoon-chicken.jpg"
let cricket = "https://img.favpng.com/7/1/15/insect-cricket-cartoon-clip-art-png-favpng-ShFkfnpziep3hhyVuYxmTCGGm.jpg"


//Combine the button appear and disappear with the picture to avoid global variables and other dleays
function startLevel(level){
   
    gameStart = 0;
    let sources = initializeBoard(level);
    let count = 0
    matches = 0;
    if (level == 1){
        
         guessesleft = 5;
    }
    if (level == 2){
        guessesleft = 15;
    }
    if (level == 3){
        guessesleft = 35;
    }
         
         let boxes = document.getElementById("Button Boxes").childNodes
         for(let i = 0; i < boxes.length; i++){
            if (boxes[i].nodeType != 3 && boxes[i].id != "EndGame" && boxes[i].id != "EndGameWin"){
                //console.log("Div children: " + boxes[i].childNodes)
                 child = boxes[i].childNodes
                 //console.log(child)
                 document.getElementById(child[1].id).src = sources[count]
                 count++;
            }
         }
        
    }

function initializeBoard(level){
    const map = new Map;
    let rand = Math.floor(Math.random() * 3);
    let sources = []
    let length
    //console.log(level)
    if (level == 1){
        length = 6
    }
    if(level == 2){
        length = 12
    }
    if(level == 3){
        length = 24
    }
    //console.log(length)
    while(sources.length < length){
        //console.log(sources)
        if(level == 1){
        rand = Math.floor(Math.random() * 3);
        }
        if(level == 2){
            rand = Math.floor(Math.random() * 6);
        }
        if(level == 3){
            rand = Math.floor(Math.random() * 12);
        }
        console.log(rand)
        if (rand == 0){
            if (map.has(butterfly) == false){
                map.set(butterfly, 1)
                sources.push(butterfly)
            }else {
                if (map.get(butterfly) <= 1){
                    map.set(butterfly, 2)
                sources.push(butterfly)
            }
            
        }
    }
        if (rand == 1){
            if (map.has(ladybug) == false){
                map.set(ladybug, 1)
                sources.push(ladybug)
            } else {
                if (map.get(ladybug) <= 1){
                    map.set(ladybug, 2)
                sources.push(ladybug)
            }
        }
    }
        if (rand == 2){
            if (map.has(dog) == false){
                map.set(dog, 1)
                sources.push(dog)
            } else {
                if (map.get(dog) <= 1){
                    map.set(dog, 2) 
                sources.push(dog)
            }
        }
    }
        if (rand == 3){
            if (map.has(fox) == false){
                map.set(fox, 1)
                sources.push(fox)
            }else {
                if (map.get(fox) <= 1){
                    map.set(fox, 2)
                sources.push(fox)
            }
            
        }
    }
        if (rand == 4){
            if (map.has(cat) == false){
                map.set(cat, 1)
                sources.push(cat)
            }else {
                if (map.get(cat) <= 1){
                    map.set(cat, 2)
                sources.push(cat)
            }
            
        }
    }
        if (rand == 5){
            if (map.has(frog) == false){
                map.set(frog, 1)
                sources.push(frog)
            }else {
                if (map.get(frog) <= 1){
                    map.set(frog, 2)
                sources.push(frog)
            }
            
        }
    }
        if (rand == 6){
            if (map.has(chicken) == false){
                map.set(chicken, 1)
                sources.push(chicken)
            }else {
                if (map.get(chicken) <= 1){
                    map.set(chicken, 2)
                sources.push(chicken)
            }
            
        }
    }
        if (rand == 7){
            if (map.has(lemur) == false){
                map.set(lemur, 1)
                sources.push(lemur)
            }else {
                if (map.get(lemur) <= 1){
                    map.set(lemur, 2)
                sources.push(lemur)
            }
            
        }
    }
        if (rand == 8){
            if (map.has(racoon) == false){
                map.set(racoon, 1)
                sources.push(racoon)
            }else {
                if (map.get(racoon) <= 1){
                    map.set(racoon, 2)
                sources.push(racoon)
            }
            
        }
    }
        if (rand == 9){
            if (map.has(squirell) == false){
                map.set(squirell, 1)
                sources.push(squirell)
            }else {
                if (map.get(squirell) <= 1){
                    map.set(squirell, 2)
                sources.push(squirell)
            }
            
        }
    }
        if (rand == 10){
            if (map.has(duck) == false){
                map.set(duck, 1)
                sources.push(duck)
            }else {
                if (map.get(duck) <= 1){
                    map.set(duck, 2)
                sources.push(duck)
            }
            
        }
        }
        if (rand == 11){
            if (map.has(gerbil) == false){
                map.set(gerbil, 1)
                sources.push(gerbil)
            }else {
                if (map.get(gerbil) <= 1){
                    map.set(gerbil, 2)
                sources.push(gerbil)
            }
            
        }
        }
        if (rand == 12){
            if (map.has(cricket) == false){
                map.set(cricket, 1)
                sources.push(cricket)
            }else {
                if (map.get(cricket) <= 1){
                    map.set(cricket, 2)
                sources.push(cricket)
            }
            
        }
        }
            }
    console.log(sources)
    return sources

}
function changeGuesses(currguessleft){
        if (currguessleft == 0){
            console.log("GAME OVER");
            document.getElementById("EndGame").style.display = "block";
            
        }
        var text = "Guesses Remaining: ";
        text = text + currguessleft;
        
        document.getElementById("count1").textContent = text;
       
}
function startgame(){
    gameStart = 1;
    
}
function buttondisappear(idname){
    //document.getElementsById("message").style.display = "block";
   var parent = idname.parentNode;
   document.getElementById(parent.id).style.display = "none";
   buttonsclicked.push(parent);
   //console.log(guessesleft)
   
}
function showButton(idname, third){
    var parent = idname.parentNode;
    document.getElementById(buttonsclicked[0].id).style.display = "block";
    document.getElementById(buttonsclicked[1].id).style.display = "block";
    if(third){
    document.getElementById(buttonsclicked[2]?.id).style.display = "block";
    }
    buttonsclicked = [];
}
function showpicture(element, level){
    buttondisappear(element)
    var parent = element.parentNode.parentNode;
    var child = parent.childNodes[1]; //picture at selected box
    cardsselected.push(child); //adds picture to cards array
    
    document.getElementById(child.id).style.display = "block"; //shows picture
    if (cardsselected.length >2 ){
        alert("Youve clicked cards too fast please  take your time between selections")
        picDisp(cardsselected, true); 
        showButton(element, true)
        cardsselected = []
        buttonsclicked = []
    } else {
    if (cardsselected.length == 2) { //two cards have been selected
    guessesleft = guessesleft - 1;
    
    if (cardsselected[0].src != cardsselected[1].src) { //cards are not the same
        match = false;
    setTimeout(() => {  picDisp(cardsselected, false); showButton(element, false) }, 3000);
    } else {
    match = true;
    matches++;
    //console.log(matches)
    if (level == 1){
    if (matches == 3){
        endgameWin();
    }
    }
    if (level == 2){
        if (matches == 6){
            endgameWin();
        }
    }
    if (level == 3){
        if (matches == 12){
            endgameWin();
        }
    }
    cardsselected = []
    buttonsclicked = [];
    }
    console.log(guessesleft)
    changeGuesses(guessesleft);
}
    }
    
    return;
}
function picDisp(element, third){
    document.getElementById(cardsselected[0].id).style.display = "none";
    document.getElementById(cardsselected[1].id).style.display = "none";
    if(third){
    document.getElementById(cardsselected[2]?.id).style.display = "none";
    } 
    
    cardsselected = []
}
function getGuesses(){
    //console.log(guessesleft)
    return guessesleft;
}
function endgameWin(){
    document.getElementById("EndGameWin").style.display = "block";
}

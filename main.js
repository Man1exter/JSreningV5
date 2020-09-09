let options = ['option 1 ', 'option 2 '];



const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    document.querySelector('h1').textContent = options[index];
}


const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    options.push(input.value);
    alert(`add ${input.value}`);
    input.value = " ";
}


const deleteElements = (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = "";
    }


const showOption = () => {
    alert(options.join(" "));
    }

//show elements
document.querySelector(".add").addEventListener("click", addOption);


//delete elements
document.querySelector(".clean").addEventListener("click", deleteElements);


//show elements
document.querySelector(".ShowOptions").addEventListener("click", showOption);


document.querySelector(".ShowAdvice").addEventListener("click", showAdvice);









////////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////



const spanText = document.querySelector('.text')
const spanTyp = document.querySelector('.cursor')
const texet = 'Hey Hey welcome sia rc well good nice spark sit the items dol webistes complete functions';


let moveLetter = 0;   //add letter with time below
const time = 60;




const addLetter = () => {
 spanText.textContent +=  texet[moveLetter];
 moveLetter++;
 if(moveLetter === texet.length) clearInterval(indexTyping);
}

const addTyping = () => {
    spanTyp.classList.toggle('move');
}

const indexTyping = setInterval(addLetter, time);
setInterval(addTyping, 600)


///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const spanWord = document.querySelector(".words");
const spaceLet = document.querySelector(".space");
const wordArray = ['Hello There', 'Whats up?', 'Have a nice day!'];

let addLetters = 0;
const times = 50;


let moveWord = -15;
let moveArray = 0;







const animationLetter = () =>{
    
    if (moveWord >= 0){
        spanWord.textContent += wordArray[moveArray][moveWord];
    }
                  
    moveWord++;
    if (moveWord === wordArray[moveArray].length) {
      moveArray++
           
    if (moveArray === wordArray.length) return;

         return setTimeout(()=>{
             moveWord = -15;
               spanWord.textContent = '';
                     animationLetter();
           }, 1000)
 }
 setTimeout(animationLetter, 100)
}
animationLetter();







//typing space

const addLat = () => {
    spaceLet.classList.toggle("tip")
}

setInterval(addLat, 500)
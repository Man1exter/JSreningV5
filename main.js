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
const texet = 'Hey Hey welcome sia rc well good nice spark sit the items dol webistes complete functions'


let moveLetter = 0;
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
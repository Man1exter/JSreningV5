let options = ['option 1', 'option 2'];



const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    document.querySelector('h1').textContent = options[index];
}


const addOption = (e) => {

    e.preventDefault();
    const input = document.querySelector('input');
    input.value = "";
    alert(`add ${input.value}`);
    options.push(input.value);
}


const deleteElements = (e) => {

    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = "";

    }


    const showOption = () => {
    alert(options.join(" -- --"));
    }

//show elements
document.querySelector(".add").addEventListener("click", addOption)


//delete elements
document.querySelector(".clean").addEventListener("click", deleteElements)


//show elements
document.querySelector(".ShowOptions").addEventListener("click", showOption)


document.querySelector(".ShowAdvice").addEventListener("click", showAdvice)


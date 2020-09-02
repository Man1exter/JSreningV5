let options = [];



//add elements
const addOptions = (e) => {
    e.preventDefault();
    document.querySelector('input').value;
}

document.querySelector(".add").addEventListener("click", addOptions)




//delete elements
const deleteElements = (e) => {
    e.preventDefault();
    options.length = 0;
    
    }
//delete elements
document.querySelector(".clean").addEventListener("click", deleteElements)



//show elements
const showOption = () => {
    alert(options.join(" --- ---"));
}

document.querySelector(".ShowOption").addEventListener("click", showOptions)


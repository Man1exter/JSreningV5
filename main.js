let options = [];





//add elements
document.querySelector(".add").addEventListener("click", addOptions)

const addOptions = () => {
   let option = options.push();
}



//delete elements
document.querySelector(".clean").addEventListener("click", deleteElements)

const deleteElements = (e) => {
e.preventDefault();
options.length = 0;

}



//show elements
document.querySelector(".ShowOptions").addEventListener("click", showOptions)

const showOptions = () => {
    alert(options.join(" --- ---"));
}
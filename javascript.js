let headingOne = document.querySelector(".headingOne")
let inputOne = document.querySelector(".inputOne")
let buttonOne = document.querySelector(".buttonOne")
let erroeOne = document.querySelector(".erroeOne")
let box = document.querySelector(".box")

let headingTwo = document.querySelector(".headingTwo")
let inputTwo = document.querySelector(".inputTwo")
let buttonTwo = document.querySelector(".buttonTwo")
let erroeOneTwo = document.querySelector(".erroeOneTwo")
let boxTwo = document.querySelector(".boxTwo")

boxTwo.style.display = "none"






buttonOne.addEventListener("click" , function(){
// console.log(headingOne)
// console.log(inputOne)
// console.log(buttonOne)


if(!inputOne.value){
    erroeOne.innerHTML = "Please Enter A value"
    erroeOne.style.background = "red"
    erroeOne.style.color = "white"
    erroeOne.style.padding = "5px 5px"

    
    
}else if(isNaN(inputOne.value)){
    erroeOne.innerHTML = "Please Enter A Number"
     erroeOne.style.background = "red"
    erroeOne.style.color = "white"
    erroeOne.style.padding = "5px 5px"
}
else if(inputOne.value>10 || inputOne.value<1){
    erroeOne.innerHTML = "Please Enter a number betweem 1 - 10"
     erroeOne.style.background = "red"
    erroeOne.style.color = "white"
    erroeOne.style.padding = "5px 5px"
}
else{
   
erroeOne.innerHTML = "Game start"
box.style.display = "none"
boxTwo.style.display = "block"




}
}) 
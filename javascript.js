let headingOne = document.querySelector(".headingOne")
let inputOne = document.querySelector(".inputOne")
let buttonOne = document.querySelector(".buttonOne")
let errorOne = document.querySelector(".errorOne")
let box = document.querySelector(".box")

let headingTwo = document.querySelector(".headingTwo")
let inputTwo = document.querySelector(".inputTwo")
let buttonTwo = document.querySelector(".buttonTwo")
let errorTwo = document.querySelector(".errorTwo")
let chance = document.querySelector(".chance")
let boxTwo = document.querySelector(".boxTwo")


 let count = 3
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
   
box.style.display = "none"
boxTwo.style.display = "flex"
chance.innerHTML = `chance: ${count}`

}
}) 




buttonTwo.addEventListener("click" , function(){

    if(!inputTwo.value){
    errorTwo.innerHTML = "Please Enter A value"
   
    
    
}else if(isNaN(inputTwo.value)){
    errorTwo.innerHTML = "Please Enter A Number"
  
}
else if(inputTwo.value>10 || inputTwo.value<1){
    errorTwo.innerHTML = "Please Enter a number betweem 1 - 10"
   
}
else{
   
if(count>1){
    count--
    chance.innerHTML = `chance ${count}`
    if(inputOne.value==inputTwo.value){
        headingTwo.innerHTML = "Player Two wins!!!!"
         headingTwo.style.background = "red"
        buttonTwo.style.display = "none"
    }
}else{
    count = 0
    chance.innerHTML = `chance ${count}`
    headingTwo.innerHTML = "Player Two Loses!!!!"
    headingTwo.style.background = "red"
        buttonTwo.style.display = "none"

}

}
})
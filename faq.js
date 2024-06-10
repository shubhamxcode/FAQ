const button=document.querySelector('#button')
const button2=document.querySelector('#button-2')
const button3=document.querySelector('#button-3')
const button4=document.querySelector('#button-4')
const button5=document.querySelector('#button-5')
const para=document.querySelector(".para")
const para2=document.querySelector(".para-2")
const para3=document.querySelector(".para-3")
const para4=document.querySelector(".para-4")
const para5=document.querySelector(".para-5")


let isOpen =true; 
button.addEventListener('click',function(e){
    isOpen=!isOpen
    if (isOpen) {
        button.innerHTML="-"
        para.innerHTML="The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated channel! If you haven't joined yet, you can get an invite to our Discord server here."
    }else{
        button.innerHTML="+"
        para.innerHTML=null
    }
}) 

let isOpen2 =true; 
button2.addEventListener('click',function(e){
    isOpen2=!isOpen2
    if (isOpen2) {
        button2.innerHTML="-"
        para2.innerHTML="We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project."
    }else{
        button2.innerHTML="+"
        para2.innerHTML=null
    }
}) 
let isOpen3 =true; 
button3.addEventListener('click',function(e){
    isOpen3=!isOpen3
    if (isOpen3) {
        button3.innerHTML="-"
        para3.innerHTML="We don't provide official solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you re encouraged to review other people s code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback."
    }else{
        button3.innerHTML="+"
        para3.innerHTML=null
    }
}) 
let isOpen4 =true; 
button4.addEventListener('click',function(e){
    isOpen4=!isOpen4
    if (isOpen4) {
        button4.innerHTML="-"
        para4.innerHTML='Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you d like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you re much more likely to receive valuable feedback from others.'
    }else{
        button4.innerHTML="+"
        para4.innerHTML=null
    }
}) 
let isOpen5 =true; 
button5.addEventListener('click',function(e){
    isOpen5=!isOpen5
    if (isOpen5) {
        button5.innerHTML="-"
        para5.innerHTML='Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you d like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you re much more likely to receive valuable feedback from others.'
    }else{
        button5.innerHTML="+"
        para5.innerHTML=null
    }
}) 

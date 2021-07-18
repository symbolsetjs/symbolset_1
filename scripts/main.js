var myImg=document.querySelector('img');

console.log(myImg);
var countClick = 1;

myImg.onclick = function(){

    var mySrc = myImg.getAttribute('src'); 
    ++countClick;    
    
    mySrc= `images/firefox-icon-${countClick}.png`
    
    console.log(mySrc + ' ' + countClick);
    
    myImg.setAttribute('src', mySrc);
    
    if(countClick==4){
        countClick=0;        
    }
}   

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    console.log('in function');
    let inputText;
    let myName;
    
    if(!myName && !inputText){
        inputText = prompt('Plese enter your name.');
    }else if(!inputText){
        myName = inputText;
    }
    
    console.log('myName ' + myName );
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is cool, ' + myName;
    
    
//     if(!myName){
//     setUserName();
//     } else {
//         var storedName = localStorage.getItem('name');
//         myHeading.textContent = 'Mozilla is COOL, ' + storedName;
//     }
}

myButton.onclick = function(){
    setUserName();
    console.log('button');
}



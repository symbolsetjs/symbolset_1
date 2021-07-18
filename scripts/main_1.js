var myHeading = document.querySelector('h1');
const newHeading = myHeading.textContent += ' Hi ' + `${name}`;
var name = 'FOX';
console.log(name);

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
//var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = promt('Plese enter your name.');
    localStore.setItem('name', myName);
    myHeading.textContent = 'Mozila is cool, ' + myName;
}

console.log('myName ' + myName )
    //+     'localStore.getItem' + localStore.getItem('name'));

if(!localStore.getItem('name')){
    setUserName();
} else {
    var storedName = localStore.getItem('name');
    myHeading.textContent = 'Mozilla is COOL, ' + storedName;
}

myButton.onclick = function(){
    setUserName;
}



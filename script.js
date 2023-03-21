let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// let hr = document.getElementsByClassName('h');
// let min = document.getElementsByClassName('m');
// let sec = document.getElementsByClassName('s');


// let hand = document.getElementsByClassName('hand');
// console.log(hand);


function displayTime (){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30*h+m/2;
    let mRotation =6*m;
    let sRotation =6*s;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}


setInterval(displayTime,1000)
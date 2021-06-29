//array length 10 initiated

Array.from(Array(10).keys())


//fun for filling in continous values between 2 numbers

function range(start, end) {
      return Array(end-start + 1).fill().map((_,idx) => start + idx)
    }

var partialunchecked = range(91, 100);


// console.log(unchecked);
var op=range(41,50);

var unchecked=partialunchecked.concat(op);

for(var x=85;x>=15;x=x-10)
{
    if(x!=45){
    op=range(x,x+1);
    unchecked=unchecked.concat(op);
    }
}
console.log(unchecked);
// var op=range(41,50);
// unchecked=unchecked.concat(op);
// console.log(unchecked);

const exitdoor = ['92','99']

const frame = document.querySelector(".frame")
var count = 0;

for( i = 1; i<=100;u=i++){
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.setAttribute('id', i)
    box.innerHTML=`${i}`
    box.addEventListener('click', () =>{
        box.classList.toggle('clicked')
        if (box.className=='box clicked'){
            count++;
        }
        else{
            count--;
        }
        document.getElementById("output").innerHTML = 66-count;
    })
    frame.appendChild(box)
}
for(i in unchecked){
    document.getElementById(unchecked[i]).classList.toggle('nonClickable')
    document.getElementById(unchecked[i]).innerHTML=" ";
}

for(i in exitdoor){
    document.getElementById(exitdoor[i]).classList.toggle('exitdoor')
}
const card = document.getElementsByClassName('card')

function rotate(e){
    e.style.animation = "normal rotate 500ms ease-in-out"
}

function rotateBack(e){
    e.style.animation = "reverse rotate 500ms ease-in-out"
}

for(i =0; i<12; i++){
    card[i].setAttribute('id', i)
}

for(i =0; i<12; i++){
    let temp = document.getElementById(i)
    temp.addEventListener('click',() =>{
        rotate(temp);
        temp.classList.toggle = 'show';
        if(temp.classList == 'card')
        {
        rotate(temp);
        }
        else if (temp.classList =='card show'){
            rotateBack(temp);
        }
    })    
}

// for (i = 0; i < 12; i++) {
//     let temp  = document.getElementById(i)
//     temp.addEventListener('click',() =>{
//         if(temp.classList == 'card show')
//         {
//         rotateBack(temp);
//         }
//         else{
//             continue;
//         }
//     })
// }
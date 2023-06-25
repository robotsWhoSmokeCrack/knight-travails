import {pubSub} from './pubsub.js'

export const buildBoard = (a) => {
    let board = []
    for(let j = 0; j < 8; j ++){
    for (let i = 0; i < 8 ; i++){
        let arr = [j,i]
        board.push(arr)
    }
}
console.log(board)
return board
} 

const Knight = function(pos=null){
    return{
        pos:pos
    }
}

export const showBoard = () => {
    let rawBoard = buildBoard();

    rawBoard.forEach((el)=>{
    const div = document.createElement("div")
        div.id = `space-${el[0]}${el[1]}`
       
        if((el[0]+el[1])%2 == 0) div.classList.add("black-space")
    document.querySelector(".container").appendChild(div)
    })

    let knight = Knight([0,0]);
    const div = document.createElement('div');
    div.id = 'knight'
    
    document.querySelector(`#space-${knight.pos[0]}${knight.pos[1]}`).appendChild(div)
}
// showBoard()

export function moveKnightPiece(moveArr){

    if(!moveArr.length) return;
    else {
    const move = moveArr.pop()
    return setTimeout(()=>{
        console.log({move})
        const space = document.querySelector(`#space-${move[0]}${move[1]}`)
        const knight = document.querySelector("#knight")
        space.appendChild(knight);
        moveKnightPiece(moveArr)},
    700)
    }
}






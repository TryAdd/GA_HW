// * Remember to run "go live" below to see your changes on save.


// * write all your code INSIDE the function below
function init() {
    const userC = document.querySelector('#user-lable')
    const compC = document.querySelector('#comp-lable')
    const resultC = document.querySelector('#result')
    const btnC = document.querySelectorAll('.btn')
    
    let player
    let comput
    let results
    
    btnC.forEach(button => button.addEventListener('click', ()=>{
       player = button.parentElement.id

        // player = button.textContent
        computerTurn();
        userC.textContent=`player: ${player}`
        compC.textContent=`computer: ${comput}`
        resultC.textContent= checkWinner();
        
    
    }))

    
    function computerTurn(){
        const randNum = Math.floor(Math.random() *3)+1
    
        switch(randNum){
            case 1:
                comput ='rock';
                break;
                console.log(randNum)
            case 2:
                comput = 'paper';
                break;
            case 3:
                comput ='scissor';
                break;
                
        }
    }
    
    function checkWinner(){
        if(player == comput){
            return "Draw!"
        }else if(comput == 'rock'){
            return (player == 'paper')? 'You win!' : 'You Lose!:('
        }else if(comput == 'paper'){
            return (player == 'scissor')? 'You win!' : 'You Lose!:('
        }else if(comput == 'scissor'){
            return (player == 'scissor')? 'You win!' : 'You Lose!:('
        }
    }


}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)

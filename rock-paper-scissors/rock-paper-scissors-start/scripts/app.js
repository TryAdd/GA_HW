// * Remember to run "go live" below to see your changes on save.


// * write all your code INSIDE the function below
function init() {
    const userC = document.querySelector('#user-lable')
    const compC = document.querySelector('#comp-lable')
    const resultC = document.querySelector('#result')
    const btnC = document.querySelectorAll('.btn')
    const playerPoint = document.querySelector('#user-score')
    const compPoint = document.querySelector('#comp-score')

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
                comput ='scissors';
                break;
                
        }
    }
    
    function checkWinner(){
        if(player == comput){
            return "Draw!"
        }else if(player == 'rock'){
            return (comput == 'scissors')? 'You win!' : 'You Lose!:('
        }else if(player == 'paper'){
            return (comput == 'rock')? 'You win!' : 'You Lose!:('
        }else if(player == 'scissors'){
            return (comput == 'paper')? 'You win!' : 'You Lose!:('
        }
    }

    // function scoreIncrease{
    //     if(player=lis"You win!"){
    //         ++playerPoint
    //     }
    // }


}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)

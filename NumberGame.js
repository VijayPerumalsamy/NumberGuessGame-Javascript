 let btn = document.getElementById('btn');
 let output = document.getElementById('outputtext');
 let time = 6;
 let number = [Math.floor(Math.random() *100)]
 btn.addEventListener('click',function(){
     let input = document.getElementById('userinput').value;
     if(input == number){
         output.innerHTML = `Congradulations! \n 
         You Guessed Right, Your Number Was ${number}`
     }else if(input < number){
         time--;
         output.innerHTML = `You Guessed Too Low! You Have Remaining ${time} Attempts`
         
     };
     if(input > number){
         time--;
         output.innerHTML = `You Guessed Too High! You Have Remaining ${time} Attempts`
         
     }
     if(time == 0){
        output.innerHTML =`Game Over!!! And The Number was ${number}` 
     }
    });